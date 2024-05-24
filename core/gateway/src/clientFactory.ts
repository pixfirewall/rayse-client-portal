import { v4 as uuidv4 } from 'uuid'
import forge, { Middleware, ResourceTypeConstraint } from 'mappersmith'

import { ClientApis, ClientIdValueItems, ClientIdValues } from './types'
import { EncodeJsonMiddleware } from 'mappersmith/middleware'

const email = import.meta.env.VITE_AUTH_USERNAME
const password = import.meta.env.VITE_AUTH_PASSWORD

type UpstreamAuthResponse = { bearerToken: string; refreshToken: string; changePasswordToken: string }

const authClient = forge({
  clientId: ClientIdValueItems.AuthClient,
  host: ClientApis[ClientIdValueItems.AuthClient] as string,
  middleware: [EncodeJsonMiddleware],
  resources: {
    Auth: {
      login: { path: '/api/user/login', method: 'POST' },
    },
  },
})

const getAccessTokenMiddleware = () => {
  const AccessToken: Middleware = () => {
    let accessToken: string | null = null
    return {
      async request(request) {
        if (accessToken === null) {
          const authresponse = await authClient.Auth.login({
            body: {
              email,
              password,
            },
          })
          const { bearerToken } = authresponse.data() as UpstreamAuthResponse
          accessToken = bearerToken
        }
        return request.enhance({
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      },
      response(next, renew) {
        return next().catch(response => {
          if (response.status() === 401) {
            accessToken = null
            return renew()
          }
          return next()
        })
      },
    }
  }
  return AccessToken
}

export const createClient = <T extends ResourceTypeConstraint>({
  host,
  clientId,
  resources,
  isPublic = false
}: {
  host?: string
  clientId: ClientIdValues
  resources: T,
  isPublic?: boolean
}) =>
  forge({
    clientId: `${clientId}-${uuidv4()}`,
    host: host ? host : (ClientApis[clientId] as string),
    middleware: isPublic ? [] : [getAccessTokenMiddleware()],
    resources,
  })
