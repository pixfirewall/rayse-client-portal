import { ClientIdValueItems, createClient } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import { HOME_API_REDUCER_PATH } from '../constants'

const resources = {
  Home: {
    getHomeList: { path: '/homes' },
  },
}

const homeClient = createClient({
  clientId: ClientIdValueItems.DefaultClient,
  resources,
})

export const homeApi = createApi({
  reducerPath: HOME_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getHomeList: builder.query<string[], { page: number; size: number }>({
      queryFn: async ({ page, size }, queryApi, extraOptions, baseQuery) => {
        const homeResponse = await homeClient.Home.getHomeList()
        const data = homeResponse.data() as string[]
        return { data }
      },
    }),
  }),
})

export const { useGetHomeListQuery } = homeClient
