import { createGlobalStyle } from 'styled-components'
import { color } from './index'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${color.main};
  }
`