import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import ButtonBase from '@material-ui/core/ButtonBase'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { direction, alignment, px } from './styles'
import gql from 'graphql-tag'
import TextInput from './components/TextInput'


const GET_CARDS = gql`
  query GetData {
    cards {
      description
    }
  }
`

const CREATE_CARD = gql`
  mutation createCard($description: String!) {
    createCard(description: $description) {
      description
    }
  }
`

export default () => {
  const [description, setDescription] = useState('')
  const [createCard] = useMutation(CREATE_CARD)

  const { error, data } = useQuery(GET_CARDS)
  error && console.log(error)

  const submitForm = e => {
    e.preventDefault()

    createCard({ variables: { description }, refetchQueries: [{ query: GET_CARDS }] })
    .catch((res) => 
    {
      const errors = res.graphQLErrors.map(error => error.message)
      alert(errors)
    })
  }

  return (
    <div>
      {
        data && data.cards.map((card, i) => 
          <SPaper key={i}>
            {card.description}
          </SPaper>
        )
      }

      <Box onSubmit={submitForm}>
        <Form>
          <TextInput 
            label='Description' 
            type='text' 
            onChange={e => setDescription(e.target.value)}
          />
          <Button type='submit'> Send </Button>
        </Form>
      </Box>
    </div>
  )
}

const SPaper = styled(Paper)`
  width: ${px(300)};
  height: ${px(100)};
  margin-bottom: ${px(15)};

  ${direction()};
  ${alignment()};
`

const Box = styled(Paper)`
  width: ${px(300)};
  height: ${px(300)};

  ${direction()};
  ${alignment()};
`

const Form = styled.form`
  width: 100%;
`

const Button = styled(ButtonBase)`
  width: 100%;
  height: ${px(50)};
  margin-top: ${px(45)} !important;

  font-size: ${px(23)} !important;

  box-shadow: ${px(-4)} ${px(6)} ${px(28)} rgba(0,0,0,0.27);
  border-radius: ${px(3)} !important;
`