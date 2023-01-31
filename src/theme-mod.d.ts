import { 
  Theme, 
  ThemeOptions, 
  ThemeProvider, 
  PaletteOptions,  
  PaletteColorOptions, 
  SimplePaletteColorOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    },
    tag: {
      label: string,
      version: string,
    }
  }

  export interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
    tag: {
      label?: string,
      version?: string,
    }
  }

  export interface Palette {
    neutral?: PaletteColor
  }
  
  export interface PaletteOptions {
    neutral?: PaletteColorOptions   
  }

  export interface PaletteColor {
    darker?: string
  }

  export interface SimplePaletteColorOptions {
    darker?: string
  }
}
