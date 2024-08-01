import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { CyclesContextProvider } from './contexts/CyclesContext'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
