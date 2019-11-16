import React, { useState } from "react";
import styled from "styled-components";

const DoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Public Sans", sans-serif;
  width: 100%;
  height: 100%;
`;

const BoldTitle = styled.h4`
  text-align: center;
  color: #47525e;
  font-size: 26px;
  font-weight: bold;
`;

const OrderText = styled.p`
  text-align: center;
  color: #47525e;
  font-size: 16px;
`;

const Image = styled.img`
  min-width: 100vw;
  @media (max-width: 768px) {
    min-width: 0;
    max-width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 0 10px;
  }
`;

const OrderDone = ({ servings, recipe }) => {
  const [time, setTime] = useState(15);
  let finalServing = (recipe && recipe.portions && recipe.portions.Amount)
    ? servings /
      (recipe.portions.Amount.includes("/")
        ? Number(recipe.portions.Amount[0])
        : Number(recipe.portions.Amount))
    : 1;
  if (!finalServing) finalServing = 1;
  const timer = setTimeout(() => {
    if (time - 1 < 0) {
      clearInterval(timer);
    } else {
      setTime(time - 1);
    }
  }, 1000);
  return (
    <>
      {time === 0 ? (
        <div
          style={{
            height: "100%",
            height: "100%",
            flexDirection: "column",
            display: "flex",
            alignItems: "center"
          }}
        >
          <BoldTitle style={{ marginTop: "1em" }}>
            Order has been delivered!
          </BoldTitle>
          <div style={{ display: "flex", padding: "10px" }}>
            <Image src={recipe.picture_url} />
          </div>
          <h2 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
            {recipe.name}
          </h2>
          <Container>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                flex: 0.5
              }}
            >
              <h3>Ingredients for {servings} serving(s):</h3>
              <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                {recipe.ingredients &&
                  recipe.ingredients.map(({ name: i, amount, unit }) => {
                    return (
                      <React.Fragment key={i}>
                        <p>
                          <b>{Math.ceil(finalServing)}</b>x {amount}
                          {unit || "kpl"}
                        </p>
                        <p>{i.charAt(0).toUpperCase() + i.slice(1)}</p>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
            <div style={{ flex: 0.5, marginBottom: '20px' }}>
              <h3>Instructions:</h3>
              <div>
                {recipe.instruction
                  .split("#")
                  .filter(x => x)
                  .map((wtf, i) => {
                    return (
                      <p key={i}>
                        <b>{i + 1}.</b> {wtf}
                      </p>
                    );
                  })}
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <DoneContainer>
          <BoldTitle style={{ marginTop: "1em" }}>
            Thank you for your order!
          </BoldTitle>
          <OrderText>The order will be delivered shortly!</OrderText>
          <img style={{ maxWidth: "14em" }} src="delivery-truck.svg" />
          <BoldTitle>Estimated delivery in:</BoldTitle>
          <BoldTitle>
            {Math.floor(time / 60)}:
            {time % 60 === 0
              ? "00"
              : time % 60 < 10
              ? "0" + (time % 60)
              : time % 60}
          </BoldTitle>
        </DoneContainer>
      )}
    </>
  );
};

export default OrderDone;
