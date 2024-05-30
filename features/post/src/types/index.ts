export type MatchSizes = {
  xs: boolean
  mobile: boolean
  sm: boolean
  tablet: boolean
  desktop: boolean
}

// e.g.: 4 bath
export type HouseSpec = {
  value: string
  feature: string
}

export type ActivityLogRecord = {
  title: string
  milestone: string
  date: string
  duration: string
  location: string
  details: string
}
