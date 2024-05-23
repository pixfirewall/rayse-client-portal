import { z } from 'zod'

export const AgentSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  agentId: z.number(),
  name: z.string(),
  url: z.string(),
})

export const PhonesSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  phoneType: z.string(),
  number: z.string(),
  description: z.string(),
})

export const BrokerageSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  name: z.string(),
  logoImagePath: z.string(),
  websiteUrl: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  doingBusinessAs: z.string(),
  isActive: z.boolean(),
  teamCount: z.number(),
  theme: z.string(),
  realStaqId: z.string(),
})

export const TeamSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  brokerage: BrokerageSchema,
  email: z.string(),
  imagePath: z.string(),
  isActive: z.boolean(),
  name: z.string(),
  phoneNumber: z.string(),
  websiteUrl: z.string(),
  theme: z.string(),
  realStaqId: z.string(),
})

export const BaseUserSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  emailAddress: z.string(),
  firstName: z.string(),
  imagePath: z.string(),
  isActive: z.boolean(),
  lastName: z.string(),
  timezone: z.string(),
  phones: z.array(PhonesSchema),
  title: z.string(),
  registeredOn: z.string(),
  invitedOn: z.string(),
})

export const PrimaryAgentSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  additionalInfo: z.string(),
  agentLinks: z.array(AgentSchema),
  bio: z.string(),
  licenseId: z.string(),
  user: BaseUserSchema,
  team: TeamSchema,
  brokerageAgentId: z.string(),
})

export const UserTypeItems = {
  Agent: 'Agent',
  Admin: 'Admin',
  NotSet: 'NotSet',
  Client: 'Client',
} as const
export const UserTypeSchema = z.nativeEnum(UserTypeItems)

export const UserJourneySchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  propertiesCount: z.number(),
  offersCount: z.number(),
  activitiesDuration: z.number(),
  activitiesUnconfirmed: z.number(),
  recentJourneyStep: z.string(),
  isActive: z.boolean(),
  primaryAgent: PrimaryAgentSchema,
  startDate: z.string(),
  users: z.array(
    BaseUserSchema.extend({
      agentId: z.number(),
      clientId: z.number(),
      isParentActive: z.boolean(),
      userTypes: UserTypeSchema,
    }),
  ),
})

export const UpstreamUserJourneyResponseSchema = z.array(UserJourneySchema)
export type UpstreamUserJourneyResponse = z.infer<typeof UpstreamUserJourneyResponseSchema>
