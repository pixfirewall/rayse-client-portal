import { z } from 'zod'

export const ClientIdValueItems = {
  DefaultClient: 'default-client',
  AuthClient: 'auth-client',
  DuringClient: 'during-client',
  PreClient: 'pre-client',
  PostClient: 'post-client',
} as const

export const API_URL_KEY = 'REACT_APP_API_URL'
export const DEFAULT_API_URL = 'https://api.rayse.com/'
export const ClientIdValuesSchema = z.nativeEnum(ClientIdValueItems)
export type ClientIdValues = z.infer<typeof ClientIdValuesSchema>

export const ClientIdsSchema = z.record(ClientIdValuesSchema, z.string())
export type ClientIds = z.infer<typeof ClientIdsSchema>

export const getDomain = () => { return window.location.href.replace('https://', '').replace('http://', '').split('/')[0]; };

export const websitsAPIBaseUrl = () => {
  var domain = getDomain();
  if (domain.includes("localhost")) {
    return DEFAULT_API_URL.replace('https://api', 'https://api.dev');
  } else if (domain.includes(".dev.")) {
    return DEFAULT_API_URL.replace('https://api', 'https://api.dev');
  } else if (domain.includes(".qa.")) {
    return DEFAULT_API_URL.replace('https://api', 'https://api.qa');
  } else if (domain.includes(".uat.")) {
    return DEFAULT_API_URL.replace('https://api', 'https://api.uat');
  } else {
    return DEFAULT_API_URL;
  }
};

export const ClientApis: ClientIds = {
  [ClientIdValueItems.DefaultClient]: websitsAPIBaseUrl(),
  [ClientIdValueItems.AuthClient]: websitsAPIBaseUrl(),
  [ClientIdValueItems.DuringClient]: websitsAPIBaseUrl(),
  [ClientIdValueItems.PreClient]: websitsAPIBaseUrl(),
}
