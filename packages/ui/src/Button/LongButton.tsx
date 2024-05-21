import React, { PropsWithChildren } from 'react'
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type Props = {
  color: 'darkGreen' | 'lightGreen' | 'purple' | 'black' | 'report' | 'report-white'
  onClick?: () => void
}

export const LongButton = (props: PropsWithChildren<Props>) => {
  switch (props.color) {
    case 'darkGreen': return (<DarkGreenStyle onClick={props.onClick}>{props.children}</DarkGreenStyle>)
    case 'lightGreen': return (<LightGreenStyle onClick={props.onClick}>{props.children}</LightGreenStyle>)
    case 'purple': return (<PurpleStyle onClick={props.onClick}>{props.children}</PurpleStyle>)
    case 'black': return (<BlackStyle onClick={props.onClick}>{props.children}</BlackStyle>)
    case 'report': return (<ReportStyle onClick={props.onClick}>{props.children}</ReportStyle>)
    case 'report-white': return (<ReportWhiteStyle onClick={props.onClick}>{props.children}</ReportWhiteStyle>)
    default: return (<></>)
  }
}

const LightGreenStyle = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
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
  display: 'flex',
  justifyContent: 'space-between',
  //width: '280px',
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

const PurpleStyle = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '280px',
  textAlign: 'left',
  backgroundColor: "#451F3C",
  color: '#FFF',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: 9,
  borderRadius: 444,
  gap: 12,
  '&:hover': {
    backgroundColor: '#451F3C77'
  }
})

const BlackStyle = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '280px',
  textAlign: 'left',
  backgroundColor: "#171717",
  color: '#FFF',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: 9,
  borderRadius: 444,
  gap: 12,
  '&:hover': {
    backgroundColor: '#17171777'
  }
})

const ReportStyle = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  textAlign: 'left',
  backgroundColor: "#D9D4C8",
  color: '#171717',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '16px 16px 16px 24px',
  borderRadius: 444,
  gap: 12
})

const ReportWhiteStyle = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  textAlign: 'left',
  backgroundColor: "#FFF",
  color: '#171717',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '16px 16px 16px 24px',
  borderRadius: 444,
  gap: 12
})
