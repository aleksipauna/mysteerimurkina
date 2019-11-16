import React from 'react'
import styled from 'styled-components';
import { Pagify } from "../Navigator";

const Button = styled.button`
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
        <Button>Terveellistä</Button>
      </Option>
      <Option>
        <Button>Herkullista</Button>
      </Option>
      <button onClick={props.next}>NEXT</button>
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)