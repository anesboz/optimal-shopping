import { createTheme } from '@mui/material'

export const myTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mob: 0,
      lap: 1024,
      desktop: 1200,
    },
  },
})
