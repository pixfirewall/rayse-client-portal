// Augment the palette to include a salmon color
export declare module '@mui/material/styles' {
  interface Palette {
    'rayse-green': Palette['primary']
    'rayse-blue': Palette['primary']
  }

  interface PaletteOptions {
    'rayse-green'?: PaletteOptions['primary']
    'rayse-blue'?: PaletteOptions['primary']
  }
}

// Update the Button's color options to include a salmon option
export declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    'rayse-green': true
    'rayse-blue': true
  }
}
