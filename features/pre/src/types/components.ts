export type ParagraphText = {
  title: string
  body: string
}

export type ClarityStepProps = {
  number: number
  days: number
  activities: number
  details: Array<ParagraphText>
}

export type ClarityMetrics = {
  days: number
  hours: number
  activities: number
  outcomes: number
}
