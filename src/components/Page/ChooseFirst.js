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
      <Option pic='238.jpeg' title="Healthy" content="Nutrient-rich but still as delicious!" onClick={() => handleClick('healthy')}/>
      <Option pic='10255.jpeg' title="Convenient" content="Don't want to waste time in the kitchen? Choose this to get an easy and fast recipe." onClick={() => handleClick('delicious')}/>
      <Option pic='4956.jpeg' title="Low carbon footprint" content="Reducing food waste while still eating low emission food? Gotcha!" onClick={() => handleClick('aware')}/>
      <Option pic='5796.jpeg' title="Exotic" content="Discover a new favourite." onClick={() => handleClick('exotic')}/>
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)