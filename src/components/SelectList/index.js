import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR_DISABLED, COLOR_GREEN } from '../constants'

const SelectableItem = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  border: 1px solid ${COLOR_DISABLED};
  height: 50px;
  border-radius: 80px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const SelectCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid ${COLOR_DISABLED};
  background-color: ${({ active }) => active ? COLOR_GREEN : 'white'};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckMark = styled.span`
  width: 5px;
  height: 10px;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  transform: rotate(45deg);
  margin-bottom: 4px;
`

const SelectImage = styled.img`
  min-height: 40px;
  max-height: 40px;
  margin-left: 25px;
`

const SelectName = styled.span`
  margin-left: 0px;
`

const SelectList = ({ items = [], onClick }) => {
  const [selected, setSelected] = useState([])

  const handleSelect = (id) => {
    if (selected.includes(id)) setSelected(selected.filter(s => s !== id))
    else setSelected(selected.concat(id))
    onClick(id)
  }

  return (
    <div>
      { items.map((item) => {
        const active = selected.includes(item.id)
        return (
          <SelectableItem key={item.id} onClick={() => handleSelect(item.id)}>
            <div style={{ minWidth: '60px' }}>
              <SelectImage src={item.img} />
            </div>
            <SelectName>
              {item.name}
            </SelectName>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <SelectCircle active={active}>
                { active && <CheckMark /> }
              </SelectCircle>
            </div>
          </SelectableItem>
        )
      }) }
    </div>
  )
}

export default SelectList