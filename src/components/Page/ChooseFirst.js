import React from 'react'
import styled from 'styled-components';
import { Pagify } from "../Navigator";
import Button from '../Button'

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
  font-family: 'Montserrat', sans-serif;
`;

const OptionsSection = styled.section`
  display: -webkit-flex;
  display: flex;
`;

const Option = styled.div`
  border-radius: 5px;
  padding: 3em;
  margin: 1em;
  background: rgb(0,0,0);
  background: linear-gradient(124deg, rgba(0,0,0,1) 20%, rgba(248,104,0,1) 100%);
`;

const ChooseFirst = (props) => {
  return (
    <OptionsSection>
      <Option>
        <OptionContent>Terveellistä</OptionContent>
      </Option>
      <Option>
        <OptionContent>Herkullista</OptionContent>
      </Option>
      <Button onClick={props.next} content='Next' />
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)