const defaultTheme = {
  colors: {
    bg: '#F9F8F7',
    fg: '#EDEAE4',
    primary: '#153147',
    secondary: '#CEC6BB',
    dark: '#444543'
  },
  functions: {
    toRem: (px: number) => `${px/16}rem`
  },
  fonts: {
    types: {
      sansSerif: 'Inter',
      serif: 'Cormorant Garamond',
    },  
    sizes: {
      xs: 10,
      sm: 14,
      default: 16,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    }
  }
}

export type ThemeType = typeof defaultTheme
export default defaultTheme