export declare module '@mui/material/styles' {
  interface TypographyVariants {
    'rayse-16400': React.CSSProperties
    'rayse-16700': React.CSSProperties
    'rayse-20400': React.CSSProperties
    'rayse-20700': React.CSSProperties
    'rayse-12600': React.CSSProperties
    'rayse-24700': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'rayse-16400'?: React.CSSProperties
    'rayse-16700'?: React.CSSProperties
    'rayse-20400'?: React.CSSProperties
    'rayse-20700'?: React.CSSProperties
    'rayse-12600'?: React.CSSProperties
    'rayse-24700'?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
export declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'rayse-16400': true
    'rayse-16700': true
    'rayse-20400': true
    'rayse-20700': true
    'rayse-12600': true
    'rayse-24700': true
  }
}
