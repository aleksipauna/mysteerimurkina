import React, {useState} from 'react'
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Button } from 'semantic-ui-react';
import { COLOR_ORANGE} from '../constants';

const ButtonContainer = styled.div`
    margin: 0.5em 0em 1em 0em;
    border-radius: 20px;
    border: 3px solid ${COLOR_ORANGE};
    padding: 0.5em 1em 0.5em 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const NumberText = styled.span`
    font-size: 20px;
    text-align: center;
`;

const PMButton = (props) => {
    const [number, setNumber] = useState(4)
    const plusNumber = () => {
        setNumber(number+1)
        props.numberChanged(number+1)
    }
    const minusNumber = () => {
        setNumber(Math.max(1, number-1))
        props.numberChanged(Math.max(1, number-1))
    }
    return (
        <ButtonContainer>
            <FaPlus onClick={plusNumber} style={({marginRight: '2rem'})}/>
            <NumberText>{number}</NumberText>
            <FaMinus onClick={minusNumber} style={({marginLeft: '2rem'})}/>
        </ButtonContainer>
    )
}

export default PMButton
