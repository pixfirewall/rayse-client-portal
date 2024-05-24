type Signature = {
  id: number
  createdBy: number
  createdOn: string
  updatedBy: number
  updatedOn: string
}

export type AgentLinkRecord = Signature & {
  agentId: number
  name: string
  url: string
}

export type BrokerageRecord = Signature & {
  name: string
  logoImagePath: string
  websiteUrl: string
  email: string
  phoneNumber: string
  doingBusinessAs: string
  isActive: boolean
  teamCount: number
  theme: string
  realStaqId: string
}

export type TeamRecord = Signature & {
  brokerage: BrokerageRecord
  email: string
  imagePath: string
  isActive: boolean
  name: string
  phoneNumber: string
  websiteUrl: string
  theme: string
  realStaqId: string
}

export type TestimonialRecord = Signature & {
  agentId: number
  clientName: string
  text: string
  order: number
}

export type PhoneRecord = Signature & {
  phoneType: string
  number: string
  description: string
}

export type UserRecord = Signature & {
  emailAddress: string
  firstName: string
  imagePath: string
  isActive: boolean
  lastName: string
  timezone: string
  phones: Array<PhoneRecord>
  title: string
  registeredOn: string
  invitedOn: string
}

export type AgentPublicInfoRecord = Signature & {
  additionalInfo: string
  agentLinks: Array<AgentLinkRecord>
  bio: string
  brokerageAgentId: string
  headshotImagePath: string
  licenseId: string
  team: TeamRecord
  testimonials: Array<TestimonialRecord>
  user: UserRecord
}

export type AgentPublicInfoRequestParams = {
  id: number
}
