import React, {useState} from 'react'
import styled from 'styled-components'
import { direction, alignment } from './styles'
import List from './components/List'
import Form from './components/Form'
import Card from './components/Card'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const GET_CARDS = gql`
  query GetData {
    cards {
      description
    }
  }
`

export default () => {
  const [description, setDescription] = useState('')

  const { error, data } = useQuery(GET_CARDS)
  error && console.log(error)

  return (
    <Wrapper>
      <List>
        { data && data.cards.map((card, i) => <Card key={i}> {card.description} </Card>) }
      </List>
      <Form>

      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${direction()};
  ${alignment()};
`

