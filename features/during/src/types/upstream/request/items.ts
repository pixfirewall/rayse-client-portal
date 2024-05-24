import { z } from 'zod'

export const UpstreamMyJourneyListRequestParamsSchema = z.object({
  Take: z.number().optional(),
  Skip: z.number().optional(),
  OrderBy: z.string().optional(),
  'Filter.IsActive': z.boolean().optional(),
})
export type UpstreamMyJourneyListRequestParams = z.infer<typeof UpstreamMyJourneyListRequestParamsSchema>

export const UpstreamMyJourneyRequestParamsSchema = z.object({
  journeyId: z.number().optional(),
})
export type UpstreamMyJourneyRequestParams = z.infer<typeof UpstreamMyJourneyRequestParamsSchema>
