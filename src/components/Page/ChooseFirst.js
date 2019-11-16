import React from 'react'
import styled from 'styled-components';
import { Pagify } from "../Navigator";
import Option from "./Option"


const OptionContent = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
  font-family: 'Public Sans', sans-serif;
`;

const OptionsSection = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChooseFirst = (props) => {
  const handleClick = (c) => {
    props.setCategory(c)
    props.next()
  }
  return (
    <OptionsSection>
      <Option pic='238.jpeg' title="Healthy" content="Delicios and nutrient-rich!" onClick={() => handleClick('healthy')}/>
      <Option pic='10255.jpeg' title="Delicious" content="Well-tested all-time mouthwatering favourites!" onClick={() => handleClick('delicious')}/>
      <Option pic='4956.jpeg' title="Aware" content="Save the planet with your next meal!" onClick={() => handleClick('aware')}/>
      <Option pic='5796.jpeg' title="Exotic" content="Discover a new favourite." onClick={() => handleClick('exotic')}/>
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)