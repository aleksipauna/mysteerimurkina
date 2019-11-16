import React from 'react'
import styled from 'styled-components'
import { COLOR_ORANGE, COLOR_DISABLED } from '../constants'

const Button = styled.div`
  width: ${({ width }) => width ? width : '140px'};
  height: ${({ height }) => height ? height : '40px'};
  border-radius: 80px;
  background-color: ${({ inverted }) => inverted ? 'white' : COLOR_ORANGE};
  color: ${({ inverted }) => inverted ? COLOR_ORANGE : 'white'};
  border: ${({ inverted }) => inverted ? `1px solid ${COLOR_ORANGE}` : 'none'};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  ${ ({ inverted }) => inverted ? 'font-weight: bold;' : '' }
  ${ ({ inverted }) => inverted ? 'font-size: 16px;' : '' }
  ${ ({ inverted }) => inverted ? 'border-width: 3px;' : '' }
  ${ ({ inverted }) => inverted ? `&:hover { background-color: ${COLOR_ORANGE}; color: white; };` : '' }
  ${ ({ inverted }) => inverted ? 'transition: all .2s;' : '' }
`

const ButtonWithContent = (props) => {
  return (
    <Button { ...props } onClick={() => props.disabled ? null : props.onClick()}>
      { props.content }
      { props.icon }
    </Button>
  )
}

export default ButtonWithContent