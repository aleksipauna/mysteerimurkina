import React from 'react'
import styled from 'styled-components'
import { COLOR_ORANGE, COLOR_DISABLED } from '../constants'

const Progress = styled.div`
  height: 10px;
  max-width: 120px;
  width: 20vw;
  margin: 0 10px;
  border-radius: 20px;
  background-color: ${({ active }) => active ? COLOR_ORANGE : COLOR_DISABLED};
`

const ProgressWrapper = styled.div`
  display: flex;
`

const ProgressBar = ({ total, current }) => {
  const constructProgress = () => {
    let res = []
    for (let i = 0; i < total; i++) res.push(<Progress key={i} active={i < current} />)
    return res
  }
  return (
    <ProgressWrapper>
      { constructProgress() }
    </ProgressWrapper>
  )
}

export default ProgressBar