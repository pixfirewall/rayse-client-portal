import { ClientIdValueItems, createClient } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import { AgentPublicInfoRecord, AgentPublicInfoRequestParams } from '../types'

import { PRE_API_REDUCER_PATH } from '../constants'

const resources = {
  Pre: {
    getAgentInfoById: { path: '/api/agent/public/{id}' },
  },
}

const preClient = createClient({
  clientId: ClientIdValueItems.PreClient,
  resources,
  isPublic: true,
})

export const preApi = createApi({
  reducerPath: PRE_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getAgentInfo: builder.query<AgentPublicInfoRecord, AgentPublicInfoRequestParams>({
      async queryFn({ id }) {
        const response = await preClient.Pre.getAgentInfoById({ id })
        const data = response.data<AgentPublicInfoRecord>()
        return { data }
      },
    }),
  }),
})

export const { useGetAgentInfoQuery } = preApi
