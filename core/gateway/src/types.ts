import { z } from 'zod'

export const ClientIdValueItems = {
  DefaultClient: 'default-client',
  AuthClient: 'auth-client',
  DuringClient: 'during-client',
} as const

export const ClientIdValuesSchema = z.nativeEnum(ClientIdValueItems)
export type ClientIdValues = z.infer<typeof ClientIdValuesSchema>

export const ClientIdsSchema = z.record(ClientIdValuesSchema, z.string())
export type ClientIds = z.infer<typeof ClientIdsSchema>

export const devServerAddress = 'https://api.dev.rayse.com'

export const ClientApis: ClientIds = {
  [ClientIdValueItems.DefaultClient]: devServerAddress,
  [ClientIdValueItems.AuthClient]: devServerAddress,
  [ClientIdValueItems.DuringClient]: devServerAddress,
}
