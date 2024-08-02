import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px; 
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme['green-500']}; 
  border-radius: 8px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${(props) => props.theme['green-300']};
}
`
