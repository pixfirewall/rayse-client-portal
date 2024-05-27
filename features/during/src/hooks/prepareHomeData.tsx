import { useCallback, useEffect, useState } from 'react'

import { HomeCardProps } from '../components'
import { PropertyEvaluationStatusEnum, PropertyRoot, PropertyEvaluationStatus } from '../types'

export interface HomeData {
  offers: HomeCardProps[]
  evaluating: HomeCardProps[]
  rejected: HomeCardProps[]
}

export const usePrepareHomeData = (properties: PropertyRoot[] = []) => {
  const [data, setData] = useState<HomeData | null>(null)

  const processData = useCallback(() => {
    const offers = properties
      .filter(propertyFilter(PropertyEvaluationStatusEnum.Enum.PendingReview))
      .map(propertyMapper)
    const evaluating = properties
      .filter(propertyFilter(PropertyEvaluationStatusEnum.Enum.UnderEvaluation))
      .map(propertyMapper)
    const rejected = properties.filter(propertyFilter(PropertyEvaluationStatusEnum.Enum.Rejected)).map(propertyMapper)

    setData({ offers, evaluating, rejected })
  }, [JSON.stringify(properties)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}

const propertyFilter = (item: PropertyEvaluationStatus) => (p: PropertyRoot) => p.propertyEvaluationStatus === item

const propertyMapper = (p: PropertyRoot): HomeCardProps => ({
  ribbon: true,
  label: p.propertyEvaluationStatus === PropertyEvaluationStatusEnum.Enum.Rejected ? true : false,
  images: p.property.propertyImages.map(i => i.imagePath ?? ''),
  address: p.property.address.address1 ?? '',
  price: formatter.format(p.property.listPrice ?? 0),
  bed: p.property.bedroomCount ?? 0,
  bath: p.property.bathroomCount ?? 0,
  sqft: p.property.squareFootage?.toString() ?? '0',
})

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
})
