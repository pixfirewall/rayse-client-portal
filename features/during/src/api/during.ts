import { ClientIdValueItems, createClient } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import {
  UpstreamMyJourneyListResponse,
  UpstreamMyJourneyListRequestParams,
  UpstreamMyJourneyRequestParams,
  UpstreamMyJourneyResponse,
} from '../types'
import { DURING_API_REDUCER_PATH } from '../constants'

const resources = {
  During: {
    getMyJourneyList: { path: '/api/my-journey/list' },
    getMyJourneyById: { path: 'api/my-journey/{journeyId}' },
  },
}

const duringClient = createClient({ clientId: ClientIdValueItems.DuringClient, resources })

export const duringApi = createApi({
  reducerPath: DURING_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getMyJourneyList: builder.query<UpstreamMyJourneyListResponse, UpstreamMyJourneyListRequestParams>({
      async queryFn({ Take = 10, Skip = 0, ...rest }) {
        const response = await duringClient.During.getMyJourneyList({ Take, Skip, ...rest })
        const data = response.data<UpstreamMyJourneyListResponse>()
        return { data }
      },
    }),
    getMuJourneyById: builder.query<UpstreamMyJourneyResponse, UpstreamMyJourneyRequestParams>({
      async queryFn({ journeyId }) {
        const response = await duringClient.During.getMyJourneyById({ journeyId })
        const data = response.data<UpstreamMyJourneyResponse>()
        return { data }
      },
    }),
  }),
})

export const { useGetMyJourneyListQuery, useGetMuJourneyByIdQuery } = duringApi
