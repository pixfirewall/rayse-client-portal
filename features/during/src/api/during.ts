import { ClientIdValueItems, createClient } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import { UpstreamUserJourneyResponse, UpstreamUserJourneyRequestParams } from '../types'

const resources = {
  During: {
    getMyJourney: { path: '/api/my-journey/list' },
  },
}

const duringClient = createClient({ clientId: ClientIdValueItems.DuringClient, resources })

export const trainingApi = createApi({
  reducerPath: 'trainingApi',
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getUserJourneyList: builder.query<UpstreamUserJourneyResponse, UpstreamUserJourneyRequestParams>({
      async queryFn({ Take = 10, Skip = 0, ...rest }) {
        const response = await duringClient.During.getMyJourney({ Take, Skip, ...rest })
        const data = response.data<UpstreamUserJourneyResponse>()
        return { data }
      },
    }),
  }),
})

export const { useGetUserJourneyListQuery } = trainingApi
