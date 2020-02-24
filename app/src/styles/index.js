import { css } from 'styled-components'

const direction = (x = 'row') => ` display: flex; flex-direction: ${x};`

const alignment = ({ main = 'center', cross = 'center' } = {}) =>
  `justify-content: ${main}; align-items: ${cross};`

const px = n => `${(n * 100) / 1440}vw`

const fonts = ({ weight = 'normal', size = 17, font = 'courgette', color = 'gray' } = {}) =>
`
  font-size: ${px(size)}; 
  font-weight: ${weight};
  font-family: ${setFont[font]}; 
  color: ${setColor[color] || color};
`

const setFont = {
  oswald: "'Oswald', ;",
  yeonSung: "'Yeon Sung', ;",
  courgette: "'Courgette', cursive;"
}

const setColor = {
  white:'#fff',
  main: '#dde1e7',
  shadow1: ' #ffffff73',
  shadow2: 'rgba(94, 104, 121, .288)',

  orange: '#e17055',
  purple: '#6c5ce7',
  blue: '#74b9ff',
  yellow: '#ffeaa7',
  gray: '#636e72',
  pink: '#e84393'
}

const scroll = css`
  overflow: auto;
  &::-webkit-scrollbar { 
    display: none;
  }
`


export { direction, alignment, px, fonts, setColor, scroll }
