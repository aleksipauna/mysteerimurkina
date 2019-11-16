import React from 'react'
import styled from 'styled-components'
import { COLOR_DISABLED } from '../constants'

const SelectableItem = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  border: 1px solid ${COLOR_DISABLED};
  height: 40px;
  border-radius: 80px;
`

const SelectList = ({ items = [] }) => {
  return (
    <div>
      { items.map((item) => {
        return (
          <SelectableItem>
            image
            {item.name}
            circle
          </SelectableItem>
        )
      }) }
    </div>
  )
}

export default SelectList