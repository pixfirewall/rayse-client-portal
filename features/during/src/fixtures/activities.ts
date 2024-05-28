import { ActivityStatus } from '../components/ActivityList/Activity'

export const activities = [
  {
    title: 'Earnest money deposit',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: ActivityStatus.Inprogres,
    clickable: false,
  },
  {
    title: 'Disclosures',
    status: ActivityStatus.Done,
    clickable: false,
  },
  {
    title: 'Home inspection',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: ActivityStatus.Inprogres,
    clickable: false,
  },
  {
    title: 'Termite inspection',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: ActivityStatus.Inprogres,
    clickable: true,
  },
  {
    title: 'Final walk-through',
    status: ActivityStatus.Todo,
    clickable: false,
  },
]

export const consultationActivities = [
  {
    title: 'Home requirements',
    status: ActivityStatus.Done,
    clickable: false,
  },
  {
    title: 'Buyer/Broker agreement',
    status: ActivityStatus.Done,
    clickable: false,
  },
  {
    title: 'MLS Search',
    status: ActivityStatus.Done,
    clickable: false,
  },
  {
    title: 'Financing options',
    status: ActivityStatus.Done,
    clickable: false,
  },
]
