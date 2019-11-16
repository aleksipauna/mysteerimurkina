import React, {useState} from 'react'
import styled from 'styled-components';
import { Pagify } from "../Navigator";
import Option from "./Option"
import PMButton from "../Button/PMButton"


const OrderColumn = styled.div`
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    align-items:center;
    flex: 0.5;
`;

const OrderSection = styled.div`
  display: flex;
  justify-content: center;
`;

const OrderText = styled.p`
    text-align: center;
    color: #47525E;
    font-size: 16px;
`;

const OrderText2 = styled.p`
    text-align: center;
    color: #47525E;
    font-size: 16px;
`;

const OrderTitle = styled.h4`
    text-align: center;
    color: #47525E;
    font-size: 20px;
`;

const BoldTitle = styled.h4`
    text-align: center;
    color: #47525E;
    font-size: 20px;
    font-weight: bold;
`;

const OrderImg = styled.img`
    max-width: 11em;
`;

const Circle = styled.div`
width: 7em;
height: 7em;
border-radius: 50%;
font-size: 22px;
color: #fff;
line-height: 7em;
text-align: center;
background: #77D353;
`;



const FinalPage = (props) => {
    const [number, setNumber] = useState(4)
    const numberChanged = (number) => {
        setNumber(number)
    }
  return (
    <div>
        <OrderText>Check your order details</OrderText>
        <OrderSection>
            <OrderColumn>
                <OrderTitle>Your order</OrderTitle>
                <OrderImg src='kyskassi.svg' />
                <PMButton numberChanged={numberChanged}/>
                <OrderSection>
                    <OrderText2 style={({marginRight: '1rem'})}>Mystery recipe ({number} pers.)</OrderText2>
                    <OrderText2 >{number*3.5}€</OrderText2>
                </OrderSection>
                <OrderText>Additional items</OrderText>
                <OrderSection>
                    <OrderText2 style={({marginRight: '1rem'})}>Cannola oil</OrderText2>
                    <OrderText2 >3,45€</OrderText2>
                </OrderSection>
                <BoldTitle>Total</BoldTitle>
                <BoldTitle>{number*3.5+3.45}€</BoldTitle>
            </OrderColumn>
            <OrderColumn>
                <OrderTitle>Waste reduced</OrderTitle>
                <Circle>0.5kg</Circle>
                <OrderTitle>Savings</OrderTitle>
                <Circle>4,30€</Circle>
            </OrderColumn>
        </OrderSection>
    </div>
  )
}

export default Pagify(FinalPage)