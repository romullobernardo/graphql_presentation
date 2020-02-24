import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, color, scroll } from '../styles'

export default () => {
  return (
    <Form>
      
    </Form>
  )
}

const Form = styled.div`
  min-height: ${px(300)};
  width: ${px(440)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${color.shadow1}, inset ${px(3)} ${px(3)} ${px(5)} ${color.shadow2};
  ${direction()};
  ${alignment()};
`