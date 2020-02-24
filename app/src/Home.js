import React from 'react'
import styled from 'styled-components'
import { direction, alignment } from './styles'
import Container from './components/Container'
import Card from './components/Card'

export default () => {
  return (
    <Wrapper>

      <Container>

        {
          [0,1,2,3,4,5,6,7,8,9,10].map((card, i) => <Card key={i}> {card} </Card>)
        }

      </Container>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${direction()};
  ${alignment()};
`

