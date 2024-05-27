import { z } from 'zod'

const UpstreamAuthResponseSchema = z.object({
  bearerToken: z.string(),
  changePasswordToken: z.string(),
  refreshToken: z.string(),
})

export type UpstreamAuthResponse = z.infer<typeof UpstreamAuthResponseSchema>
