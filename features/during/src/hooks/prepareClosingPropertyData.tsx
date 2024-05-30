import { useCallback, useEffect, useState } from 'react'

import { HomeCardProps } from '../components'
import { PropertyRoot } from '../types'

import zeroHome from '../fixtures/assets/zero-home.png';

export const getClosingPropertyId = (data: any) :number | null => {
  if (!data?.milestones || data?.milestones.length === 0) {
    return null;
  }

  for (const milestone of data.milestones) {
    if (milestone.outcomes && milestone.outcomes.length > 0) {
      for (const outcome of milestone.outcomes) {
        if (outcome.journeyPropertyId) {
          return outcome.journeyPropertyId;
        }
      }
    }
  }

  return null;
}

const formatDate = (): string => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
  const day = String(date.getDate()).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
  return `${month}/${day}/${year}`;
};

const calculatePriceDifference = (purchasePrice: string | number, listPrice: string | number): string => {
  const parsePrice = (price: string | number): number => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[$,]/g, ''));
    }
    return price;
  };

  const purchase = parsePrice(purchasePrice);
  const list = parsePrice(listPrice);

  if (isNaN(purchase) || isNaN(list) || list === 0) {
    throw new Error('Invalid price inputs or list price is zero.');
  }

  const difference = ((purchase - list) / list) * 100;

  return `${difference > 0 ? '+' : ''}${difference.toFixed(2)}%`;
};


export const findOfferAcceptedPrice = (journeyActivities: any[]): number | null => {
  for (const activity of journeyActivities) {
    if (activity.outcomePayloads) {
      // @ts-expect-error resolve after demo
      const foundPayload = activity.outcomePayloads.find(payload => payload.eventTrigger === 'OfferAccepted');
      if (foundPayload) {
        return foundPayload.payload.offerPrice;
      }
    }
  }
  return null;
}

export const findOfferAcceptedActivityPrice = (journeyData: any, journeyPropertyId: number | null): number | null => {
  if (!journeyData) return null
  const { steps, journeyActivities } = journeyData;
    // @ts-expect-error add type after demo
  const step = steps.find(step => step.listOrder === 2);

  if (!step || !step.milestones) {
    return null;
  }

  // @ts-expect-error add type after demo
  const milestones = step.milestones.filter(milestone => milestone.name === 'Offer Submission');

  if (!milestones.length) {
    return null;
  }


  for (const milestone of milestones) {
    if (milestone.outcomes) {
      // @ts-expect-error resolve after demo
      const outcome = milestone.outcomes.find(outcome => outcome.eventTrigger === 'OfferAccepted' && outcome.journeyPropertyId === journeyPropertyId);

      if (outcome && outcome.activities) {
        const activityId = outcome.activities[0];

      // @ts-expect-error resolve after demo
        const journeyActivity = journeyActivities.find(activity => activity.id === activityId);

        if (journeyActivity && journeyActivity.outcomePayloads) {
          // @ts-expect-error resolve after demo
          const payload = journeyActivity.outcomePayloads.find(payload => payload.payload && payload.payload.offerPrice);

          if (payload) {
            return payload.payload.offerPrice;
          }
        }
      }
    }
  }

  return null

}

// @ts-expect-error resolve after demo
const preprocessJourneyProperties = (properties) => {
  // @ts-expect-error resolve after demo
  return properties.reduce((acc, property) => {
    acc[property.id] = property;
    return acc;
  }, {});
};

export const usePrepareClosingPropertyData = (journey: any, journeyData: any) => {
  const [data, setData] = useState<HomeCardProps | null>(null)

  const processData = useCallback(() => {
    if (!journey || !journeyData) return;

          // @ts-expect-error resolve after demo
    const closingStep = journeyData?.steps.find(s => s.listOrder === 4);
    const propertyId = getClosingPropertyId(closingStep);
      // @ts-expect-error resolve after demo
    const selectedProperty = journeyData?.journeyProperties.find(p => p.id === propertyId);
    const selectedPropertyData = selectedProperty ? propertyMapper(selectedProperty) : null;
    const listPrice = selectedPropertyData?.price || ''
    const purchasePrice = findOfferAcceptedActivityPrice(journeyData, propertyId) || listPrice;
    const priceDifference = calculatePriceDifference(purchasePrice, listPrice);
    const activities = journeyData?.journeyActivities
    const closingReport = {
      outcomesFinished: journey?.statistics?.outcomesFinished,
      activities: journeyData?.journeyActivities.length,
      homesToured: journey?.statistics?.homesToured,
      offers: journey?.statistics?.offers,
      daysWorked: journey?.statistics?.daysWorked,
      report: {
        journeyLength: journey?.statistics?.daysWorked,
        homesToured: journey?.statistics?.homesToured,
        purchaseDate: formatDate(),
        closingDate: formatDate(),
        listPrice: listPrice,
        // @ts-expect-error resolve after demo
        purchasePrice: formatter.format(purchasePrice),
        purchaseVsListPrice: priceDifference,
        closingCredits: '+$6,500',
        milestones: journey?.statistics?.milestonesFinished,
        totalHours: journey?.statistics?.hoursWorked,
        totalMileage: journey?.statistics?.milesTraveled
      }
    }
    const properties = preprocessJourneyProperties(journeyData?.journeyProperties)

          // @ts-expect-error resolve after demo
    setData({ currentProperty: selectedPropertyData, closingReport, activities, properties })
  }, [journey, journeyData])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}

const propertyMapper = (p: PropertyRoot): HomeCardProps => {
  const images = p.property.propertyImages.length > 0 ? p.property.propertyImages : [zeroHome]
  return {
    ribbon: true,
    label: p.propertyEvaluationStatus === 'Rejected',
    images: images.map(i => i.imagePath ?? zeroHome),
    address: p.property.address.address1 ?? '',
    price: formatter.format(p.property.listPrice ?? 0),
    bed: p.property.bedroomCount ?? 0,
    bath: p.property.bathroomCount ?? 0,
    sqft: p.property.squareFootage?.toString() ?? '0',
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
})
