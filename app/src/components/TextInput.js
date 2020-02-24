import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { px } from '../styles'


export default ({ label, type, multiline, onChange }) =>  

  <Input
    label={label}
    margin='dense'
    type={type}
    multiline={multiline}
    onChange={onChange}
  />


const Input = styled(TextField)`
  width: 100%;
  min-height: ${px(56)};
  border-radius: ${px(4)};

  & label + .MuiInput-formControl {
    margin-top: ${px(16)};
  }

  & .MuiInputBase-inputMarginDense {
    padding-top: ${px(3)};
  }

  & .MuiInputBase-input {
    padding: ${px(6)} ${px(6)} ${px(7)};
    height: ${px(27)};
  }

  & .MuiFormLabel-root {
    margin-left: ${px(6)};
    &.Mui-focused {
      color: blue;
    }
  }

  & .MuiInput-underline:before {
    border-bottom-left-radius: ${px(4)};
    border-bottom-right-radius: ${px(4)};
  }

  & .MuiInput-underline:hover:before {
    border-color: blue !important;
  }

  & .MuiInput-underline:after {
    border-bottom: ${px(2)} solid blue;
    border-bottom-left-radius: ${px(4)};
    border-bottom-right-radius: ${px(4)};
  }

  & .MuiInputLabel-marginDense {
    transform: translate(0, 1.3vw) scale(1);
  }

  & .MuiInputLabel-shrink {
    transform: translate(0, 0.10vw) scale(0.75);
    transform-origin: top left;
    color: blue;
  }
`