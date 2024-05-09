import React from 'react'
import { Box, Text, Grid, Image } from '@rayseinc-packages/ui'

import { SocialContact } from '../'

import './styles.css'

import avatar1 from './avatar1.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'

export const AgentProfile = () => {
  return (
    <Box className="profile-container">
      <Box className="profile-top-section">
        <Box className="profile-image" />

        <Box className="profile-details-container">
          <Text fontSize="36px" fontWeight="700" color="#FFF" padding="40px 40px 0 40px">
            Julie Capinstand
          </Text>
          <Text fontSize="32px" fontWeight="700" color="#FFF" padding="0 40px 0 40px" textAlign="left">
            I’m committed to being your advocate on-demand, honoring your trust and partnership
            through your unique home-buying journey.
          </Text>
          <Box className="profile-contact-info">
            <Text fontSize="24px" color="#FFF" textAlign="left">
              Eliot Park Residential DRE #02095311
            </Text>
            <Text fontSize="24px" color="#FFF" textAlign="left">
              (555) 654-6675
            </Text>
            <Text fontSize="24px" color="#FFF" textAlign="left">
              jcapinstand@eliotpark.com
            </Text>
          </Box>

          <Grid container className="profile-social-info" rowSpacing={2} columnSpacing={4}>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="profile-bottom-section">
        <Box>
          <Text fontSize="44px" fontWeight={700} color="#FFF" width="210px" textAlign="left">
            Julie's reviews
          </Text>
        </Box>
        <Box className="review-box">
          <Text className="review-text" fontSize="20px">
            Julie was so clear on everything on the path
            to finding our dream home (we did!) that… 
          </Text>
          <Image src={avatar1} width="40px" height="40px" />
        </Box>
        <Box className="review-box">
          <Text className="review-text" fontSize="20px">
            As first-time homeowners we didn’t know
            what to expect. But Julie always made sure
          </Text>
          <Image src={avatar2} width="40px" height="40px" />
        </Box>
        <Box className="review-box">
          <Text className="review-text" fontSize="20px">
            10/10. I tell everyone who will listen: Julie Capinstand! Julie Capinstand!
          </Text>
          <Image src={avatar3} width="40px" height="40px" />
        </Box>
      </Box>
    </Box>
  )
}
