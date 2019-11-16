import React from 'react'
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const OptionHolder = styled.div`
    margin: 1em;
    border-radius: 1em;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 18em;
    height:14em;
    cursor: pointer;
    box-shadow: 0 .25rem .25rem rgba(0,0,0,0.2),
    0 0 1rem rgba(0,0,0,0.2);
    background-image: url("${(props) => props.src}");
`;

const OptionHeader = styled.header`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const OptionContent = styled.div`
    background: white;
    opacity: 0.15;
    height: 100%;
    width: 100%;
`;

const Option = (props) => {
    return (
        <OptionHolder src={props.pic}>
            <OptionContent>
                <OptionHeader>
                    Healthy
                </OptionHeader>
            </OptionContent>
        </OptionHolder>
    )
}

export default Option;