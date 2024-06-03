import { API_URL_KEY, ClientIdValueItems, DEFAULT_API_URL, createClient, websitsAPIBaseUrl } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import { POST_API_REDUCER_PATH } from '../constants'

const resources = {
  Post: {
    getMyJourneyList: { path: '/api/my-journey/list' },
    getMyJourneyById: { path: '/api/my-journey/{journeyId}' },
    getMyJourneyData: { path: '/api/my-journey/{journeyId}/data' },
  },
}

const postClient = createClient({ host: websitsAPIBaseUrl(), clientId: ClientIdValueItems.PostClient, resources })

export const postApi = createApi({
  reducerPath: POST_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: websitsAPIBaseUrl() }),
  keepUnusedDataFor: 300,
  endpoints: builder => ({
  }),
})

