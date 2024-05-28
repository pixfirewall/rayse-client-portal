import { z } from 'zod'
import { PrimaryAgentSchema } from './items'

export const TestimonialSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  agentId: z.number(),
  clientName: z.string().nullable(),
  text: z.string().nullable(),
  order: z.number(),
})
export type Testimonial = z.infer<typeof TestimonialSchema>

export const UpstreamAgentDataResponseSchema = PrimaryAgentSchema.extend({
  headshotImagePath: z.string().nullable(),
  testimonials: z.array(TestimonialSchema),
})
export type UpstreamAgentDataResponse = z.infer<typeof UpstreamAgentDataResponseSchema>
