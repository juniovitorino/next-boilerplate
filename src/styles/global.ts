import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Robot, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #e7e7e7;
  }
`

export default GlobalStyles
