import { v4 as uuidv4 } from 'uuid'
import forge, { Middleware, ResourceTypeConstraint } from 'mappersmith'

import { ClientApis, ClientIdValues } from './types'

const getAccessTokenMiddleware = () => {
  const AccessToken: Middleware = () => {
    let accessToken: string | null = null
    return {
      async request(request) {
        return request
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

export const createClient = ({
  host,
  clientId,
  resources,
}: {
  host?: string
  clientId: ClientIdValues
  resources: ResourceTypeConstraint
}) =>
  forge({
    clientId: `${clientId}-${uuidv4()}`,
    host: host ? host : (ClientApis[clientId] as string),
    middleware: [getAccessTokenMiddleware()],
    resources,
  })
