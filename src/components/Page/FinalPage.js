import React, { useState } from "react";
import styled from "styled-components";
import { Pagify } from "../Navigator";
import Option from "./Option";
import PMButton from "../Button/PMButton";
import { COLOR_DISABLED } from '../constants'

const mockItems = [
  { id: 1, name: "Canola oil (450ml)", img: "oljy.jpeg", price: 2 },
  { id: 2, name: "Tomato mash (500g)", img: "tomaatti.jpeg", price: 1.7 }
];

const OrderColumn = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
  align-items: center;
  flex: 0.5;
`;

const OrderSection = styled.div`
  display: flex;
  justify-content: center;
`;

const OrderText = styled.p`
  text-align: center;
  color: #47525e;
  font-size: 16px;
`;

const OrderText2 = styled.p`
  text-align: center;
  color: #47525e;
  font-size: 16px;
`;

const OrderTitle = styled.h4`
  text-align: center;
  color: #47525e;
  font-size: 20px;
`;

const BoldTitle = styled.h4`
  text-align: center;
  color: #47525e;
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
  background: #77d353;
`;

const FinalPage = props => {
  const [number, setNumber] = useState(4);
  const numberChanged = number => {
    setNumber(number);
  };
  const additional = props.additional;

  const calcSum = () => {
    const sum = additional.reduce(
      (acc, currId) => acc + mockItems.find(i => i.id === currId).price,
      0
    );
    return sum;
  };

  return (
    <div>
      <OrderSection>
        <OrderColumn>
          <OrderTitle>Your order</OrderTitle>
          <OrderImg src="kyskassi.svg" />
          <PMButton numberChanged={numberChanged} />
          <OrderSection>
            <OrderText2 style={{ marginRight: "1rem" }}>
              Surprise recipe ({number} pers.)
            </OrderText2>
            <OrderText2>{number * 3.5}€</OrderText2>
          </OrderSection>
          {additional.length && <span style={{ alignSelf: 'flex-start', marginBottom: '5px', color: COLOR_DISABLED }}>Additional products:</span>}
          {additional.map(i => {
            const { name, price } = mockItems.find(item => item.id === i);

            return (
              <OrderSection key={i}>
                <OrderText2 style={{ marginRight: "1rem" }}>{name}</OrderText2>
                <OrderText2>{price}€</OrderText2>
              </OrderSection>
            );
          })}
          <BoldTitle style={{ marginTop: 0 }}>Total</BoldTitle>
          <span
            style={{ fontWeight: "bold", fontSize: "16px", color: "#47525E" }}
          >
            {number * 3.5 + calcSum()}€
          </span>
        </OrderColumn>
        <OrderColumn>
          <OrderTitle>Waste reduced</OrderTitle>
          <Circle>{Math.round(0.1 * number * 100) / 100}kg</Circle>
          <OrderTitle>Savings</OrderTitle>
          <Circle>{Math.round(1.2 * number * 100) / 100}€</Circle>
        </OrderColumn>
      </OrderSection>
    </div>
  );
};

export default Pagify(FinalPage);
