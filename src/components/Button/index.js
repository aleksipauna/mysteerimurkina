import React from 'react'
import styled from 'styled-components'
import { COLOR_ORANGE, COLOR_DISABLED } from '../constants'

const Button = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 80px;
  background-color: ${COLOR_ORANGE};
  color: white;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`

const ButtonWithContent = (props) => {
  return (
    <Button { ...props }>
      { props.content }
      { props.icon }
    </Button>
  )
}

export default ButtonWithContent