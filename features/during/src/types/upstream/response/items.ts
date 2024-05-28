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
  phoneType: z.string().nullable(),
  number: z.string().nullable(),
  description: z.string().nullable(),
})

export const BrokerageSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  name: z.string().nullable(),
  logoImagePath: z.string().nullable(),
  websiteUrl: z.string().nullable(),
  email: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  doingBusinessAs: z.string().nullable(),
  isActive: z.boolean(),
  teamCount: z.number(),
  theme: z.string().nullable(),
  realStaqId: z.string().nullable(),
})

export const TeamSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  brokerage: BrokerageSchema,
  email: z.string().nullable(),
  imagePath: z.string().nullable(),
  isActive: z.boolean(),
  name: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  websiteUrl: z.string().nullable(),
  theme: z.string().nullable(),
  realStaqId: z.string().nullable(),
})

export const BaseUserSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  emailAddress: z.string().nullable(),
  firstName: z.string().nullable(),
  imagePath: z.string().nullable(),
  isActive: z.boolean(),
  lastName: z.string().nullable(),
  timezone: z.string().nullable(),
  phones: z.array(PhonesSchema),
  title: z.string().nullable(),
  registeredOn: z.string().nullable(),
  invitedOn: z.string().nullable(),
})

export const UserTypeItems = {
  Agent: 'Agent',
  Admin: 'Admin',
  NotSet: 'NotSet',
  Client: 'Client',
} as const
export const UserTypeSchema = z.nativeEnum(UserTypeItems)

export const UserSchema = BaseUserSchema.extend({
  agentId: z.number().nullable(),
  clientId: z.number().nullable(),
  isParentActive: z.boolean().nullable(),
  userTypes: UserTypeSchema.nullable(),
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
export type PrimaryAgent = z.infer<typeof PrimaryAgentSchema>

export const MyJourneyListSchema = z.object({
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
  users: z.array(UserSchema),
})

export const UpstreamMyJourneyListResponseSchema = z.array(MyJourneyListSchema)
export type UpstreamMyJourneyListResponse = z.infer<typeof UpstreamMyJourneyListResponseSchema>

export const StatisticsSchema = z.object({
  hoursWorked: z.number(),
  activities: z.number(),
  homesToured: z.number(),
  offers: z.number(),
  daysWorked: z.number(),
  milesTraveled: z.number(),
  milestonesFinished: z.number(),
  outcomesFinished: z.number(),
})

export const UsStateItems = {
  AL: 'AL',
  AK: 'AK',
  AZ: 'AZ',
  AR: 'AR',
  CA: 'CA',
  CO: 'CO',
  CT: 'CT',
  DE: 'DE',
  FL: 'FL',
  GA: 'GA',
  HI: 'HI',
  ID: 'ID',
  IL: 'IL',
  IN: 'IN',
  IA: 'IA',
  KS: 'KS',
  KY: 'KY',
  LA: 'LA',
  ME: 'ME',
  MD: 'MD',
  MA: 'MA',
  MI: 'MI',
  MN: 'MN',
  MS: 'MS',
  MO: 'MO',
  MT: 'MT',
  NE: 'NE',
  NV: 'NV',
  NH: 'NH',
  NJ: 'NJ',
  NM: 'NM',
  NY: 'NY',
  NC: 'NC',
  ND: 'ND',
  OH: 'OH',
  OK: 'OK',
  OR: 'OR',
  PA: 'PA',
  RI: 'RI',
  SC: 'SC',
  SD: 'SD',
  TN: 'TN',
  TX: 'TX',
  UT: 'UT',
  VT: 'VT',
  VA: 'VA',
  WA: 'WA',
  WV: 'WV',
  WI: 'WI',
  WY: 'WY',
  NA: 'NA',
} as const
export const UsStateEnum = z.nativeEnum(UsStateItems)

export const ListStatusItems = {
  Active: 'Active',
  ActiveUnderContract: 'ActiveUnderContract',
  Canceled: 'Canceled',
  Closed: 'Closed',
  ComingSoon: 'ComingSoon',
  Delete: 'Delete',
  Expired: 'Expired',
  Hold: 'Hold',
  Incomplete: 'Incomplete',
  Pending: 'Pending',
  Withdrawn: 'Withdrawn',
  Unknown: 'Unknown',
}
export const ListStatusEnum = z.nativeEnum(ListStatusItems)

export const AddressSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  radarGeofenceId: z.string().nullable(),
  address1: z.string().nullable(),
  address2: z.string().nullable(),
  city: z.string().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  state: UsStateEnum,
  zip: z.string().nullable(),
})

export const PropertyImagesSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  caption: z.string().nullable(),
  imagePath: z.string().nullable(),
  isHero: z.boolean(),
  large: z.string().nullable(),
  listOrder: z.number(),
  medium: z.string().nullable(),
  small: z.string().nullable(),
  sourceUrl: z.string().nullable(),
  tags: z.string().nullable(),
  xlarge: z.string().nullable(),
})

export const PropertySchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  address: AddressSchema,
  bathroomCount: z.number().nullable(),
  bedroomCount: z.number().nullable(),
  listPrice: z.number().nullable(),
  mlsId: z.string().nullable(),
  mlsName: z.string().nullable(),
  listStatus: ListStatusEnum,
  squareFootage: z.number().nullable(),
  propertyImages: z.array(PropertyImagesSchema),
  isActive: z.boolean().nullable(),
})

export const OffersSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  listPrice: z.number(),
  offerPrice: z.number(),
  offerStatus: z.string(),
  submissionDate: z.string(),
})

export const PropertyEvaluationsSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  journeyPropertyId: z.number(),
  property: PropertySchema,
  user: BaseUserSchema,
})

export const PropertyEvaluationStatusEnum = z.enum(['PendingReview', 'Rejected', 'UnderEvaluation'])
export type PropertyEvaluationStatus = z.infer<typeof PropertyEvaluationStatusEnum>

export const PropertyRootSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  journeyId: z.number(),
  offers: z.array(OffersSchema),
  property: PropertySchema,
  propertyEvaluations: z.array(PropertyEvaluationsSchema),
  propertyEvaluationStatus: PropertyEvaluationStatusEnum,
})
export type PropertyRoot = z.infer<typeof PropertyRootSchema>

export const UpstreamMyJourneyResponseSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
  isActive: z.boolean(),
  primaryAgent: PrimaryAgentSchema,
  properties: z.array(PropertyRootSchema),
  startDate: z.string(),
  users: z.array(UserSchema),
  statistics: StatisticsSchema,
  milestoneStatus: z.string().nullable(),
})
export type UpstreamMyJourneyResponse = z.infer<typeof UpstreamMyJourneyResponseSchema>
