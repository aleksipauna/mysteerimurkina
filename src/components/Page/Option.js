import React, { useState } from "react";
import styled from "styled-components";

const OptionHolder = styled.div`
    flex: 0.5;
    margin: 1em;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 22em;
    max-width: 22em;
    height:16em;
    cursor: pointer;
    box-shadow: 0 .25rem .25rem rgba(0,0,0,0.2),
    0 0 1rem rgba(0,0,0,0.2);
    background-image: url("${props => props.src}");
    transition: background-size .4s;
    :hover {
        background-size: auto 105%;
    }
`;

const OptionHeader = styled.header`
  color: black;
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  padding: 0.5em 0.5em 0em 0.5em;
`;

const OptionText = styled.p`
  color: black;
  font-family: "Public Sans", sans-serif;
  font-size: 13px;
  padding-left: 0.5em;
`;
const ContentBox = styled.div`
  background-color: #fafafa;
  height: 5em;
  width: 100%;
  transition: filter 0.4s;
  filter: ${({ hover }) => (hover ? "brightness(90%);" : "none")};
`;

const OptionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-end;
`;

const Option = props => {
  const [hover, setHover] = useState(false);
  return (
    <OptionHolder
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={props.pic}
      onClick={props.onClick}
      style={props.selected || hover ? {backgroundSize: 'auto 105%'} : {backgroundSize: 'auto 100%'}}
    >
      <OptionContent>
        <ContentBox hover={hover} style={props.selected ? {backgroundColor: '#90EE90'} : {backgroundColor: "#fafafa"}}>
          <OptionHeader>{props.title}</OptionHeader>
          <OptionText>{props.content}</OptionText>
        </ContentBox>
      </OptionContent>
    </OptionHolder>
  );
};

export default Option;
