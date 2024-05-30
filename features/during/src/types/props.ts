export type ReportProps = {
  outcomes: number
  activities: number
  tours: number
  offers: number
  days: number
  report: {
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
  agentPicture: string,
  agentEmail: string,
  agentPhone: string
  listOfActivities: ActivityLogRecord []
}

export type ActivityLogRecord = {

  title: string
  milestone: string
  date: string
  duration: string
  location?: string
  notes: string
}