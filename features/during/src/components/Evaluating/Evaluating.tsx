import React, { FunctionComponent, useEffect } from 'react'
import { Colors, CustomTheme, Group, Text, Image, PerViewSlider, Showif, MainPaper } from '@rayseinc-packages/ui'

import { Tab, Tabs } from '@mui/material'
import { HomeCard, HomeCardProps } from '../HomeCard'

import homeSmile from '../../fixtures/assets/home-smile.png'

interface TabPanelProps {
  index: number
  value: number
}

interface EvaluatingProps {
  evaluating?: HomeCardProps[]
  offers?: HomeCardProps[]
}

export const Evaluating: FunctionComponent<EvaluatingProps> = ({ evaluating = [], offers = [] }) => {
  const [ifZero, setIfZero] = React.useState(true)
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (ifZero && (evaluating.length > 0 || offers.length > 0)) {
      setIfZero(false)
    }
  }, [evaluating, offers])

  return (
    <Group dir="vertical" gap={24}>
      <Group dir="vertical" gap={6} padding="0 10px 0 0">
        <Text variant="rayse-24700">Your tours & offers</Text>
        <Showif con={!ifZero}>
          <Text variant="rayse-18400">Take a look at the homes you and your agent have toured up to this point.</Text>
        </Showif>
        <Showif con={ifZero}>
          <Text variant="rayse-18400">Your agent is busy find homes and scheduling tours.</Text>
        </Showif>
      </Group>
      <Group dir="vertical">
        <CustomTheme primary={Colors.Y1}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            sx={{ paddingBottom: '20px' }}
          >
            <Tab label={`Evaluating (${evaluating.length})`} />
            <Tab label={`Your offers (${offers.length})`} />
          </Tabs>
        </CustomTheme>
        <Showif con={value === 0}>
          <Showif con={!ifZero}>
            <Group sx={{ width: 470 }}>
              <PerViewSlider
                loop
                ns={1.4}
                slides={evaluating.map(home => (
                  <HomeCard {...home} />
                ))}
              />
            </Group>
          </Showif>
          <Showif con={ifZero}>
            <MainPaper style={{ boxShadow: 'none', border: 'none' }}>
              <Group dir="vertical" gap={14} alignV="center" padding="40px 0">
                <Image size={36} src={homeSmile} />
                <Text variant="rayse-18400" color="#A3A3A3" sx={{ textAlign: 'center' }}>
                  When you have seen homes they will populate here
                </Text>
              </Group>
            </MainPaper>
          </Showif>
        </Showif>
        <Showif con={value === 1}>
          <Showif con={!ifZero}>
            <Group sx={{ width: 470 }}>
              <PerViewSlider
                loop
                ns={1.4}
                slides={offers.map(home => (
                  <HomeCard {...home} />
                ))}
              />
            </Group>
          </Showif>
          <Showif con={ifZero}>
            <MainPaper style={{ boxShadow: 'none', border: 'none' }}>
              <Group dir="vertical" gap={14} alignV="center" padding="40px 0">
                <Image size={36} src={homeSmile} />
                <Text variant="rayse-18400" color="#A3A3A3" sx={{ textAlign: 'center' }}>
                  When you have seen homes they will populate here
                </Text>
              </Group>
            </MainPaper>
          </Showif>
        </Showif>
      </Group>
    </Group>
  )
}
