import { css } from 'styled-components'

const direction = (x = 'row') => ` display: flex; flex-direction: ${x};`

const alignment = ({ main = 'center', cross = 'center' } = {}) =>
  `justify-content: ${main}; align-items: ${cross};`

const px = n => `${(n * 100) / 1440}vw`

const font = ({ weight = 'normal', size = 17 } = {}) =>
  `font-size: ${px(size)}; font-weight: ${weight};`

const color = {
  main: '#dde1e7',
  shadow1: ' #ffffff73',
  shadow2: 'rgba(94, 104, 121, .288)'
}

const scroll = css`
  overflow: auto;
  &::-webkit-scrollbar { 
    display: none;
  }
`


export { direction, alignment, px, font, color, scroll }
