import { z } from 'zod'

export const UpstreamMyJourneyListRequestParamsSchema = z.object({
  Take: z.number().optional(),
  Skip: z.number().optional(),
  OrderBy: z.string().optional(),
  'Filter.IsActive': z.boolean().optional(),
})
export type UpstreamMyJourneyListRequestParams = z.infer<typeof UpstreamMyJourneyListRequestParamsSchema>

export const UpstreamMyJourneyRequestParamsSchema = z.object({
  journeyId: z.number(),
})
export type UpstreamMyJourneyRequestParams = z.infer<typeof UpstreamMyJourneyRequestParamsSchema>

export const UpstreamMyJourneyDataRequestParamsSchema = z.object({
  journeyId: z.number(),
})
export type UpstreamMyJourneyDataRequestParams = z.infer<typeof UpstreamMyJourneyDataRequestParamsSchema>

export const UpstreamAgentDataRequestParamsSchema = z.object({
  agentId: z.number(),
})
export type UpstreamAgentDataRequestParams = z.infer<typeof UpstreamAgentDataRequestParamsSchema>
