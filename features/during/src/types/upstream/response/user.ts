import { z } from 'zod'
import { PhonesSchema, UserTypeSchema } from './items'

const BaseDataSchema = z.object({
  id: z.number(),
  createdBy: z.number(),
  createdOn: z.string(),
  updatedBy: z.number(),
  updatedOn: z.string(),
})

const PermissionSchema = BaseDataSchema.extend({
  name: z.string().nullable(),
})

const AdminPermissionSchema = BaseDataSchema.extend({
  name: z.string().nullable(),
  permissions: z.array(PermissionSchema).nullable(),
})

const LrokeragePermissionsSchema = BaseDataSchema.extend({
  brokerageId: z.number().nullable(),
  brokerageName: z.string().nullable(),
  name: z.string().nullable(),
  permissions: z.array(PermissionSchema).nullable(),
})

const TeamPermissionsSchema = BaseDataSchema.extend({
  name: z.string().nullable(),
  permissions: z.array(PermissionSchema).nullable(),
  teamId: z.number().nullable(),
  teamName: z.string().nullable(),
})

const UpstreamUserDataResponseSchema = BaseDataSchema.extend({
  emailAddress: z.string().nullable(),
  firstName: z.string().nullable(),
  imagePath: z.string().nullable(),
  isActive: z.boolean(),
  lastName: z.string().nullable(),
  timezone: z.string().nullable(),
  phones: z.array(PhonesSchema).nullable(),
  title: z.string().nullable(),
  registeredOn: z.string().nullable(),
  invitedOn: z.string().nullable(),
  agentId: z.number().nullable(),
  clientId: z.number().nullable(),
  isParentActive: z.boolean().nullable(),
  userTypes: UserTypeSchema.nullable(),
  authSystemId: z.string().nullable(),
  loginPermissions: z.object({
    adminPermissions: z.array(AdminPermissionSchema).nullable(),
    brokeragePermissions: z.array(LrokeragePermissionsSchema).nullable(),
    teamPermissions: z.array(TeamPermissionsSchema).nullable(),
  }),
})
export type UpstreamUserDataResponse = z.infer<typeof UpstreamUserDataResponseSchema>
