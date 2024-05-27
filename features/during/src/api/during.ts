import { ClientIdValueItems, createClient } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import {
  UpstreamMyJourneyListResponse,
  UpstreamMyJourneyListRequestParams,
  UpstreamMyJourneyResponse,
  UpstreamMyJourneyRequestParams,
  UpstreamMyJourneyDataResponse,
  UpstreamMyJourneyDataRequestParams,
} from '../types'
import { DURING_API_REDUCER_PATH } from '../constants'

const resources = {
  During: {
    getMyJourneyList: { path: '/api/my-journey/list' },
    getMyJourneyById: { path: '/api/my-journey/{journeyId}' },
    getMyJourneyData: { path: '/api/my-journey/{journeyId}/data' },
  },
}

const duringClient = createClient({ clientId: ClientIdValueItems.DuringClient, resources })

export const duringApi = createApi({
  reducerPath: DURING_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery(),
  keepUnusedDataFor: 300,
  endpoints: builder => ({
    getMyJourneyList: builder.query<UpstreamMyJourneyListResponse, UpstreamMyJourneyListRequestParams>({
      async queryFn({ Take = 10, Skip = 0, ...rest }) {
        const response = await duringClient.During.getMyJourneyList({ Take, Skip, ...rest })
        const data = response.data<UpstreamMyJourneyListResponse>()
        return { data }
      },
    }),
    getMyJourneyById: builder.query<UpstreamMyJourneyResponse, UpstreamMyJourneyRequestParams>({
      async queryFn({ journeyId }) {
        const response = await duringClient.During.getMyJourneyById({ journeyId })
        const data = response.data<UpstreamMyJourneyResponse>()
        return { data }
      },
    }),
    getMyJourneyData: builder.query<UpstreamMyJourneyDataResponse, UpstreamMyJourneyDataRequestParams>({
      async queryFn({ journeyId }) {
        const response = await duringClient.During.getMyJourneyData({ journeyId })
        const data = response.data<UpstreamMyJourneyDataResponse>()
        return { data }
      },
    }),
  }),
})

export const { useGetMyJourneyListQuery, useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery } = duringApi
