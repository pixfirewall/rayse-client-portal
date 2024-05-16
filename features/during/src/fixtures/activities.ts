import { Statu } from '../components/ActivityList/Activity'

export const activities = [
  {
    title: 'Earnest money deposit',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: Statu.Inprogres,
    clickable: false,
  },
  {
    title: 'Disclosures',
    status: Statu.Done,
    clickable: false,
  },
  {
    title: 'Home inspection',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: Statu.Inprogres,
    clickable: false,
  },
  {
    title: 'Termite inspection',
    subtitle: 'Scheduled',
    progress: '04/12',
    status: Statu.Inprogres,
    clickable: true,
  },
  {
    title: 'Final walk-through',
    status: Statu.Todo,
    clickable: false,
  },
]
