import { z } from 'zod'
import { OffersSchema, PropertyEvaluationStatusEnum, PropertySchema, UserSchema } from './items'

export const OutcomesStatusEnum = z.enum(['Checked', 'Unchecked', 'NotApplicable'])
export const ActivityTypeEnum = z.enum([
  'DriveTime',
  'Email',
  'HomeTour',
  'Meeting',
  'PhoneCall',
  'TextMessage',
  'VideoCall',
  'Other',
  'None',
  'EvaluationStatusChanged',
  'DeskWork',
])
export const EventTriggerEnum = z.enum([
  'CaptureHomeRequirements',
  'CommissionRate',
  'HomeFeedback',
  'OfferAccepted',
  'EscrowInfo',
  'PropertyInspectionScheduled',
  'PropertyInspectionResult',
  'PestInspectionScheduled',
  'PestInspectionResult',
  'AdditionalInspectionScheduled',
  'AdditionalInspectionResult',
  'AppraisalScheduled',
  'ClosingDocumentSigningScheduled',
  'FinalWalkThroughScheduled',
  'ClosingReport',
  'None',
])
export const OutcomesEventTriggerEnum = z.enum([
  'CaptureHomeRequirements',
  'CommissionRate',
  'HomeFeedback',
  'OfferAccepted',
  'EscrowInfo',
  'PropertyInspectionScheduled',
  'PropertyInspectionResult',
  'PestInspectionScheduled',
  'PestInspectionResult',
  'AdditionalInspectionScheduled',
  'AdditionalInspectionResult',
  'AppraisalScheduled',
  'ClosingDocumentSigningScheduled',
  'FinalWalkThroughScheduled',
  'ClosingReport',
  'None',
])

export const OutcomePayloadsSchema = z.object({
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  eventTrigger: EventTriggerEnum,
  journeyActivityId: z.number(),
  journeyOutcomeId: z.number(),
  payload: z.any(),
})

export const JourneyActivitiesSchema = z.object({
  activityType: ActivityTypeEnum,
  createdBy: z.number(),
  createdOn: z.string(),
  dateOfActivity: z.string(),
  distance: z.string().nullable(),
  duration: z.string().nullable(),
  expense: z.number().nullable(),
  id: z.number(),
  journeyPropertyId: z.number().nullable(),
  notes: z.string().nullable(),
  outcomePayloads: z.array(OutcomePayloadsSchema),
  owner: UserSchema,
  updatedOn: z.string(),
})

export const OutcomesSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  activities: z.array(z.number()).nullable(),
  eventTrigger: OutcomesEventTriggerEnum,
  journeyId: z.number(),
  journeyPropertyId: z.number().nullable(),
  listOrder: z.number(),
  name: z.string().nullable(),
  offerId: z.number().nullable(),
  requiredForMilestoneCompletion: z.boolean(),
  requiredIfPropertyInStateList: z.string().nullable(),
  status: OutcomesStatusEnum,
  milestoneAgentShortDescription: z.string().nullable(),
  milestoneAgentLongDescription: z.string().nullable(),
  milestoneClientShortDescription: z.string().nullable(),
  milestoneClientLongDescription: z.string().nullable(),
  outcomeAgentShortDescription: z.string().nullable(),
  outcomeAgentLongDescription: z.string().nullable(),
  outcomeClientShortDescription: z.string().nullable(),
  outcomeClientLongDescription: z.string().nullable(),
})

export const MilestonesSchema = z.object({
  id: z.number(),
  listOrder: z.number(),
  name: z.string().nullable(),
  outcomes: z.array(OutcomesSchema),
  isComplete: z.boolean(),
  agentShortDescription: z.string().nullable(),
  agentLongDescription: z.string().nullable(),
  clientShortDescription: z.string().nullable(),
  clientLongDescription: z.string().nullable(),
  milestoneStatus: z.string().nullable(),
  outcomeAgentShortDescription: z.string().nullable(),
  outcomeAgentLongDescription: z.string().nullable(),
  outcomeClientShortDescription: z.string().nullable(),
  outcomeClientLongDescription: z.string().nullable(),
})

export const StepsSchema = z.object({
  id: z.number(),
  listOrder: z.number(),
  milestones: z.array(MilestonesSchema),
  name: z.string().nullable(),
  isComplete: z.boolean(),
  agentShortDescription: z.string().nullable(),
  agentLongDescription: z.string().nullable(),
  clientShortDescription: z.string().nullable(),
  clientLongDescription: z.string().nullable(),
})
export type Steps = z.infer<typeof StepsSchema>

export const JourneyPropertiesSchema = z.object({
  id: z.number(),
  journeyId: z.number(),
  offerId: z.number().nullable(),
  property: PropertySchema,
  propertyEvaluationStatus: PropertyEvaluationStatusEnum,
})

const UpstreamMyJourneyDataResponseSchema = z.object({
  journeyActivities: z.array(JourneyActivitiesSchema),
  journeyProperties: z.array(JourneyPropertiesSchema),
  steps: z.array(StepsSchema),
  offers: z.array(OffersSchema).optional(),
})
export type UpstreamMyJourneyDataResponse = z.infer<typeof UpstreamMyJourneyDataResponseSchema>
