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

export type ReportProps = {
  outcomes: number
  activities: number
  tours: number
  offers: number
  days: number
  journeyLength: string
  homesToured: number
  offersMade: number
  purchaseDate: string
  closingDate: string
  listPrice: string
  purchasePrice: string
  purchaseVsListPrice: string
  closingCredits: string
  milestones: number
  completedOutcomes: number
  totalHours: number
  totalMileage: string
}

export type ActivityLogRecord = {
  title: string
  milestone: string
  date: string
  duration: string
  location: string
  details: string
}
