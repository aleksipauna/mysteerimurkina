import React, { useState } from "react";
import styled from 'styled-components';

const DoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-family: 'Public Sans', sans-serif;
`;

const BoldTitle = styled.h4`
    text-align: center;
    color: #47525E;
    font-size: 26px;
    font-weight: bold;
`;

const OrderText = styled.p`
    text-align: center;
    color: #47525E;
    font-size: 16px;
`;

const OrderDone = () => {
    const [time, setTime] = useState(25*60)
    const timer = setTimeout(() => {
        if (time-1 < 0) {
            clearInterval(timer)
        } else  {
            setTime(time-1)
        }
    }, 1000)
  return (
    <DoneContainer>
        <BoldTitle style={({marginTop:'1em'})}>Thank you for your order!</BoldTitle>
        <OrderText>The order will be delivered shortly!</OrderText>
        <img style={({maxWidth:'14em'})} src='delivery-truck.svg' />
        <BoldTitle >Estimated delivery in:</BoldTitle>
        <BoldTitle >{Math.floor(time/60)}:{time%60 === 0 ? '00' : time%60 < 10 ?"0"+time%60 :time%60}</BoldTitle>
    </DoneContainer>
  )
};

export default OrderDone;
