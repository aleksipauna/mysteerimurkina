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
  justify-content: center;
`

const ProgressTitle = styled.span`
  color: ${COLOR_DISABLED};
  text-align: center;
`

const ProgressItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const pTitles = [
  "Food style",
  "Allergies and diets",
  "Additional details",
  "Order details"
]

const ProgressBar = ({ total, current }) => {
  const constructProgress = () => {
    let res = []
    for (let i = 0; i < total; i++) res.push(
      <ProgressItemWrapper>
        <Progress key={i} active={i < current} />
        <ProgressTitle>{ pTitles[i] }</ProgressTitle>
      </ProgressItemWrapper>
    )
    return res
  }
  return (
    <ProgressWrapper>
      { constructProgress() }
    </ProgressWrapper>
  )
}

export default ProgressBar