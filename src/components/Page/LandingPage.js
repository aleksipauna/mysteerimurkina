import React from "react";
import styled from "styled-components";
import { COLOR_ORANGE, COLOR_DISABLED } from "../constants";
import Button from "../Button";

const MidContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 15%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const HelpText = styled.p`
  font-size: 36px;
  color: ${COLOR_ORANGE};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    text-align: center;
  }
`;

const EatsTitle = styled.p`
  color: ${COLOR_ORANGE};
  font-size: 55px;
  font-weight: bold;
  margin: 0 0 20px 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
    margin: 20px 0;
  }
`;

const IconContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  @media (max-width: 620px) {
    flex-direction: column;
    margin: 10px 0 10px 0;
  }
  width: 100%;
`;

const IconTitle = styled.p`
  color: ${COLOR_ORANGE}
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: 620px) {
    flex-direction: column;
    margin: 10px 0 10px 0;
  }
`;

const IconWrapper = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 620px) {
    margin: 10px 0 10px 0;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${COLOR_DISABLED};
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  background-color: white;
  max-height: 95px;
  @media (max-width: 620px) {
    flex-direction: column;
    max-height: none;
  }
`;

const Icon = ({ src, title, small }) => {
  return (
    <IconWrapper>
      <img
        style={{
          width: `${small ? "100px" : "150px"}`,
          height: `${small ? "60px" : "150px"}`
        }}
        src={src}
      />
      <IconTitle>{title}</IconTitle>
    </IconWrapper>
  );
};

const LandingPage = ({ onStart }) => {
  return (
    <>
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px"
          }}
        >
          <img style={{ maxWidth: "70%" }} src="splash.jpg" />
        </div>
        <MidContainer>
          <div style={{ flex: 0.5 }}>
            <HelpText>
              Help reduce food waste and experience new recipes without taking a
              step.
            </HelpText>
          </div>
          <div
            style={{
              flex: 0.5,
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <img
              style={{ width: "140px", height: "80px", marginLeft: "20px" }}
              src="kyslogo_no_margin.svg"
            />
            <EatsTitle>K-Surprise</EatsTitle>
            <Button
              width="200px"
              height="60px"
              inverted
              onClick={onStart}
              content="Order your recipe"
            />
          </div>
        </MidContainer>
        <IconContainer>
          <Icon src="website.svg" title="Choose your preferences" />
          <Icon
            src="delivery-truck.svg"
            title="We deliver the necessary ingredients"
          />
          <Icon
            src="salad.svg"
            title="Learn new recipes and enjoy your homemade meal"
          />
        </IconContainer>
      </div>
      <Footer>
        <Icon small src="logo-kcm (1).svg" />
        <Icon small src="logo-ksm.svg" />
        <Icon small src="logo-km.svg" />
        <Icon small src="kplussa-color.svg" />
      </Footer>
    </>
  );
};

export default LandingPage;
