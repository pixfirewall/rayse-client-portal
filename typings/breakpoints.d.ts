import React from "react"

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // keep 'xs' as the base
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // add custom breakpoints
    tablet: true;
    desktop: true;
  }
}
