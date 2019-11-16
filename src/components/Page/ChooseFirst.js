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

const OptionsSection = styled.section`
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChooseFirst = (props) => {
  return (
    <OptionsSection>
      <Option pic='10255.jpeg' title="Healthy" content="Lorem ipsum" onClick={props.next}/>
      <Option pic='10255.jpeg' title="Healthy" content="Lorem ipsum" onClick={props.next}/>
      <Option pic='10255.jpeg' title="Healthy" content="Lorem ipsum" onClick={props.next}/>
      <Option pic='10255.jpeg' title="Healthy" content="Lorem ipsum" onClick={props.next}/>
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)