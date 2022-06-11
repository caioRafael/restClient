import { GlobalStyle } from './styles/GlobalStyle'

import Screen from './components/Screen'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Screen />
    </ThemeProvider>
  )
}