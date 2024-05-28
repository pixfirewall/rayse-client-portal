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
