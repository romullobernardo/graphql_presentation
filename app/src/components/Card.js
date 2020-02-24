import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, color } from '../styles'

export default ({ children }) => {
  return (
    <Card>
      <Color />
      {/* {children} */}
    </Card>
  )
}

const Card = styled.div`
  min-height: ${px(100)};
  width: ${px(345)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${color.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${color.shadow2};
  margin-bottom: ${px(15)};
  ${direction()};
  ${alignment({ main:'space-between' })};
`
const Color = styled.div`
  height: 100%;
  width: ${px(20)};
  background-color: orange;
  border-top-left-radius: ${px(5)};
  border-bottom-left-radius: ${px(5)};
`