/* theme.ts */
import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'

const { Button, Avatar } = chakraTheme.components

export const theme = extendBaseTheme({
  fonts: {
    heading: 'var(--font-montserrat)',
    body: 'var(--font-montserrat)',
  },
  components: {
    Button,
    Avatar,
  },
  colors: {
    battleship: '#96928B',
    dim: '#6D6A64',
    silver: '#B1B1AE',
    eerie: '#202222',
    light: '#FEFEFE',
  },
  radii: {
    none: '0',
    sm: '4px',
    base: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  fontSizes: {
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
  },
  lineHeights: {
    sm: '1.125rem',
    md: '1.3125rem',
    lg: '1.5rem',
  },
  styles: {
    global: {
      'html, body': {
        bgColor: 'light',
        fontWeight: 'thin',
        color: 'eerie',
      },
    },
  },
  shadows: {
    dark: '15px 15px 50px 0 rgba(0, 0, 0, 0.20)',
    light: '10px 10px 50px 0 rgba(254, 254, 254, 0.15)',
  },
})
