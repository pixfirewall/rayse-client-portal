import { useCallback, useEffect, useState } from 'react'

import { AgentBioProps, ContactInfoProps } from '../components'
import { UpstreamAgentDataResponse } from '../types/upstream/response/publicAgentData'

export type AgentData = {
  bio: AgentBioProps
  image: string
  agentName: string
  contact: ContactInfoProps
  reviews: { text: string, name: string }[]
}

export const usePrepareAgentData = (agent?: UpstreamAgentDataResponse) => {
  const [data, setData] = useState<AgentData | null>(null)

  const processData = useCallback(() => {
    const agentBio = {
      name: `${agent?.user.firstName} ${agent?.user.lastName}`,
      description: agent?.bio,
      facebook: agent?.agentLinks.find(l => l.name === 'Facebook')?.url ?? '',
      linkedIn: agent?.agentLinks.find(l => l.name === 'LinkedIn')?.url ?? '',
      instagram: agent?.agentLinks.find(l => l.name === 'Instagram')?.url ?? '',
      website: agent?.agentLinks.find(l => l.name === 'Website')?.url ?? '',
    }
    setData({
      bio: agentBio,
      image: agent?.user.imagePath ?? '',
      contact: {
        phone: agent?.user.phones[0].number ?? '',
        email: agent?.user.emailAddress ?? '',
      },
      reviews: agent?.testimonials.map(t => ({ text: t.text ?? '', name: t.clientName ?? '' })) ?? [],
      agentName: agent?.user.firstName ?? '',
    })
  }, [agent])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
