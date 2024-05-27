import { ClientIdValueItems, createClient, setAccessToken, setRefreshToken } from '@rayseinc-core/gateway'
import { createApi, fetchBaseQuery } from '@rayseinc-core/redux'
import { HOME_API_REDUCER_PATH } from '../constants'
import { UpstreamAuthResponse } from '../types'

const resources = {
  Auth: {
    login: { path: '/api/user/login', method: 'POST' },
    register: { path: '/api/registration/existing-user', method: 'POST' },
  },
}

const homeClient = createClient({
  clientId: ClientIdValueItems.DefaultClient,
  resources,
  isPublic: true,
})

export const homeApi = createApi({
  reducerPath: HOME_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    login: builder.query<UpstreamAuthResponse, { email: string; password: string }>({
      queryFn: async ({ email, password }) => {
        const response = await homeClient.Auth.login({
          body: { email, password },
        })

        const data = response.data<UpstreamAuthResponse>()
        const { bearerToken, refreshToken } = data
        setAccessToken(bearerToken)
        setRefreshToken(refreshToken)
        return { data }
      },
    }),
    register: builder.query<UpstreamAuthResponse, { code: string; password: string; confirmPassword: string }>({
      queryFn: async ({ code, password, confirmPassword }) => {
        const response = await homeClient.Auth.register({
          body: { code, password, confirmPassword },
        })

        const data = response.data<UpstreamAuthResponse>()
        const { bearerToken, refreshToken } = data
        setAccessToken(bearerToken)
        setRefreshToken(refreshToken)
        return { data }
      },
    }),
  }),
})

export const { useLazyLoginQuery, useLazyRegisterQuery } = homeApi
