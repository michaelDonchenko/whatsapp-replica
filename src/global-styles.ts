import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  width: 100%;
  height: 100vh;
}
`
