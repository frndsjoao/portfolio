import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./theme";

export interface ThemeProps {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    font-family: ${({theme}) => theme.fonts.types.serif};
    font-size: ${({theme}) => theme.functions.toRem(16)};
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.dark};
  }
`

export default GlobalStyle