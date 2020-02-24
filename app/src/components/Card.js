import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, color, font } from '../styles'
import Button from './Button'

export default ({ children }) => {
  return (
    <Card>
      <Color />
      <Body>
        <Description>
          {children}
        </Description>
        <ButtonBox>
          <Button type='del' />  
          <Button type='check' />
        </ButtonBox>
      </Body>
    </Card>
  )
}

const Card = styled.div`
  min-height: ${px(100)};
  width: ${px(385)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${color.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${color.shadow2};
  margin-bottom: ${px(15)};
  ${direction()};
  ${alignment({ main:'space-between' })};
`

const Color = styled.div`
  height: 100%;
  width: ${px(20)};
  background-color: #e17055;
  border-top-left-radius: ${px(5)};
  border-bottom-left-radius: ${px(5)};
`


const Body = styled.div`
  height: 100%;
  flex: 1;
  ${direction()}
`
const Description = styled.div`
  ${font({ weight:'bold', size:22 })};
  padding-left: ${px(15)};
  padding-top: ${px(15)};
  height: 100%;
  flex: .75;
  color: #e17055;
`
const ButtonBox = styled.div`
  padding-left: ${px(15)};
  padding-right: ${px(15)};
  height: 100%;
  flex: .25;
  ${direction()};
  ${alignment({ main:'space-between' })};
`