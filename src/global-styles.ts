import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html, body {
  width: 100%;
  min-height: 100vh;
  overflow: auto
}
`
