import { v4 as uuidv4 } from 'uuid'
import forge, { Middleware, ResourceTypeConstraint } from 'mappersmith'

import { ClientApis, ClientIdValueItems, ClientIdValues, websitsAPIBaseUrl } from './types'
import { EncodeJsonMiddleware } from 'mappersmith/middleware'

const ACCESS_TOKEN_KEY = 'rayseAccessToken'
const REFRESH_TOKEN_KEY = 'rayseRefreshToken'

type UpstreamAuthResponse = { bearerToken: string; refreshToken: string; changePasswordToken: string }

const GzipMiddleware: Middleware = () => ({
  async request(request) {
    return request.enhance({
      headers: {
        'Accept-Encoding': 'gzip',
      },
    })
  },
})

const authClient = forge({
  clientId: ClientIdValueItems.AuthClient,
  host: websitsAPIBaseUrl(),
  middleware: [EncodeJsonMiddleware],
  resources: {
    Auth: {
      login: { path: '/api/user/login', method: 'POST' },
      refresh: { path: 'api/user/refresh-token', method: 'POST' },
    },
  },
})

let accessToken: string | null = null

export const setAccessToken = (token: string) => {
  setToken(ACCESS_TOKEN_KEY, token)
}

export const setRefreshToken = (token: string) => {
  setToken(REFRESH_TOKEN_KEY, token)
}

export const removeAccessToken = () => {
  removeToken(REFRESH_TOKEN_KEY)
}

const setToken = (key: string, token: string) => {
  localStorage.setItem(key, token)
}

const getToken = (key: string): string | null => {
  return localStorage.getItem(key)
}

const removeToken = (key: string) => {
  localStorage.removeItem(key)
}

const getAccessTokenMiddleware = () => {
  const AccessToken: Middleware = () => {
    return {
      async request(request) {
        if (accessToken === null) {
          accessToken = getToken(ACCESS_TOKEN_KEY)
        }
        return request.enhance({
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      },
      response(next) {
        return next().catch(response => {
          if (response.status() === 401) {
            accessToken = null
            // TODO: make call to refresh endpoint with refresh token
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
  isPublic = false,
}: {
  host?: string
  clientId: ClientIdValues
  resources: T
  isPublic?: boolean
}) =>
  forge({
    clientId: `${clientId}-${uuidv4()}`,
    host: host ? host : (ClientApis[clientId] as string),
    middleware: isPublic
      ? [EncodeJsonMiddleware, GzipMiddleware]
      : [EncodeJsonMiddleware, getAccessTokenMiddleware(), GzipMiddleware],
    resources,
  })
