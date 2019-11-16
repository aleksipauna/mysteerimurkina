import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: pink;
  height: 56px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <GiHamburgerMenu style={{ width: '30px', height: '30px' }} />
      <h2>K-RUOKA</h2>
    </StyledHeader>
  )
}

export default Header