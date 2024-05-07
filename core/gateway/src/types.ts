import { z } from 'zod'

export const ClientIdValueItems = {
  DefaultClient: 'default-client',
  AuthClient: 'auth-client',
} as const

export const ClientIdValuesSchema = z.nativeEnum(ClientIdValueItems)
export type ClientIdValues = z.infer<typeof ClientIdValuesSchema>

export const ClientIdsSchema = z.record(ClientIdValuesSchema, z.string())
export type ClientIds = z.infer<typeof ClientIdsSchema>

export const remoteServerAddress = 'https://google.com'
export const androidLocalServerAddress = 'http://localhost:8080'

export const ClientApis: ClientIds = {
  [ClientIdValueItems.DefaultClient]: remoteServerAddress,
  [ClientIdValueItems.AuthClient]: remoteServerAddress,
}
