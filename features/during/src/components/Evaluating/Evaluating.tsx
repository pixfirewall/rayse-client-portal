import React, { FunctionComponent } from 'react'
import { Colors, CustomTheme, Group, Text, Box, PerViewSlider, Showif } from '@rayseinc-packages/ui'

import { Tab, Tabs } from '@mui/material'
import { HomeCard, HomeCardProps } from '../HomeCard'

interface TabPanelProps {
  index: number
  value: number
}

interface EvaluatingProps {
  homes: HomeCardProps[]
}

export const Evaluating: FunctionComponent<EvaluatingProps> = ({ homes }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Group dir="vertical" gap={24}>
      <Group dir="vertical" gap={6} padding="0 10px 0 0">
        <Text variant="rayse-24700">Your tours & offers</Text>
        <Text variant="rayse-18400">Take a look at the homes you and your agent have toured up to this point.</Text>
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
            <Tab label="Evaluating (3)" />
            <Tab label="Your offers (0)" />
          </Tabs>
        </CustomTheme>
        <Showif con={value === 0}>
          <Group sx={{width: 470}}>
            <PerViewSlider
						ns={1.4}
              slides={homes.map(home => (
                <HomeCard {...home} />
              ))}
            />
          </Group>
        </Showif>
        <Showif con={value === 1}>
          <Box></Box>
        </Showif>
      </Group>
    </Group>
  )
}
