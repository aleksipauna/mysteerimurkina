import React from 'react'
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { COLOR_ORANGE, COLOR_GRAY } from '../constants'

const OptionHolder = styled.div`
    margin: 1em;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 22em;
    height:16em;
    cursor: pointer;
    box-shadow: 0 .25rem .25rem rgba(0,0,0,0.2),
    0 0 1rem rgba(0,0,0,0.2);
    background-image: url("${(props) => props.src}");
    transition: transform .2s;
    :hover {
        transform: scale(1.03); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
`;

const OptionHeader = styled.header`
  color: black;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 0.5em 0.5em 0em 0.5em;
`;

const OptionText = styled.p`
  color: black;
  font-family: 'Public Sans', sans-serif;
  font-size: 13px;
  padding: 0.5em;
`;
const ContentBox = styled.div`
    background-color: #FAFAFA ;
    height: 5em;
    width: 100%;
`;

const OptionContent = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: left;
    align-items: flex-end;
`;

const Option = (props) => {
    return (
        <OptionHolder src={props.pic} onClick={props.onClick}>
            <OptionContent>
                <ContentBox>
                    <OptionHeader>
                        {props.title} 
                    </OptionHeader>
                    <OptionText>{props.content}</OptionText>
                </ContentBox>
            </OptionContent>
        </OptionHolder>
    )
}

export default Option;