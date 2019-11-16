import React from 'react'
import styled from 'styled-components'
import { COLOR_ORANGE } from '../constants'

const MidContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const LandingPage = ({ onStart }) => {
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img style={{ maxWidth: '80%' }} src='splash.jpg' />
      </div>
      <MidContainer>
        <div style={{ flex: 0.5 }}>
          <p style={{ fontSize: '40px', color: COLOR_ORANGE, fontWeight: 'bold' }}>Help reduce food waste and experience new recipes without taking a step.</p>
        </div>
        <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <img style={{ width: '170px', height: '100px', marginLeft: '20px' }} src='kyslogo_no_margin.svg' />
          <p style={{ color: COLOR_ORANGE, fontSize: '60px', fontWeight: 'bold', margin: 0 }}>Mystery eats</p>
          <button onClick={onStart}>oke</button>
        </div>
      </MidContainer>
    </div>
  )
}

export default LandingPage