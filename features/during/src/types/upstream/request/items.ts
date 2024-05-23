import { z } from 'zod'

export const UpstreamUserJourneyRequestParamsSchema = z.object({
  Take: z.number().optional(),
  Skip: z.number().optional(),
  OrderBy: z.string().optional(),
  'Filter.IsActive': z.boolean().optional(),
})
export type UpstreamUserJourneyRequestParams = z.infer<typeof UpstreamUserJourneyRequestParamsSchema>
