import { createGlobalStyle } from 'styled-components'
import { color, font } from './index'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${color.main};
    ${font()};
  }
`