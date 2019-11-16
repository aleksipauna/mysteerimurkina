import React from 'react'
import styled from 'styled-components'
import { COLOR_ORANGE, COLOR_DISABLED } from '../constants'

const Button = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 80px;
  background-color: ${({ disabled }) => disabled ? COLOR_DISABLED : COLOR_ORANGE};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWithContent = (props) => {
  return (
    <Button { ...props }>
      { props.content }
    </Button>
  )
}

export default ButtonWithContent