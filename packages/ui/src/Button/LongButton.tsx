import React, { PropsWithChildren } from 'react'
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type Props = {
  color: 'darkGreen' | 'lightGreen'
}

export const LongButton = (props: PropsWithChildren<Props>) => {
  switch (props.color) {
    case 'darkGreen': return (<DarkGreenStyle>{props.children}</DarkGreenStyle>)
    case 'lightGreen': return (<LightGreenStyle>{props.children}</LightGreenStyle>)
    default: return (<></>)
  }
}

const LightGreenStyle = styled(Button)({
  width: '280px',
  textAlign: 'left',
  backgroundColor: "#3F947D",
  color: '#FFF',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: 9,
  borderRadius: 444,
  gap: 12,
  '&:hover': {
    backgroundColor: '#3F947D77'
  }
})

const DarkGreenStyle = styled(Button)({
  width: '280px',
  textAlign: 'left',
  backgroundColor: "#2A6656",
  color: '#FFF',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: 9,
  borderRadius: 444,
  gap: 12,
  '&:hover': {
    backgroundColor: '#2A665677'
  }
})
