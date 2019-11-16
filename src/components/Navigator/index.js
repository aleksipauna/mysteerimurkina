import React, { useState, createContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import ProgressBar from "../ProgressBar";
import Button from "../Button";

const NavigatorContext = createContext();

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
`;

const ButtonWrapper = styled.div`
  margin: 0 20px;
`

const AppWrapper = styled.div`
  height: 100%;
  max-width: 60%;
  padding: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
  };
`

const PageTitle = styled.h2`
  text-align: center;
  color: #47525E;
`

export const Navigator = ({ pages }) => {
  const [activeIndex, setActiveIndex] = useState(3);

  const nextPage = () => {
    if (activeIndex !== pages.length) setActiveIndex(activeIndex + 1);
  };

  const prevPage = () => {
    if (activeIndex > 1) setActiveIndex(activeIndex - 1);
  };

  const activePage = pages
    .slice()
    .sort((a, b) => a.index - b.index)
    .find(p => p.index === activeIndex);

  return (
    <NavigatorContext.Provider value={nextPage}>
      <Header />      
      <AppWrapper>
        <PageTitle>
          {activePage.title}
        </PageTitle>
        {activePage.page}
        <ActionContainer>
          <ProgressBar current={activeIndex} total={pages.length} />
          <ActionButtonContainer>
            <ButtonWrapper>
              <Button onClick={prevPage} content="Back" />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button onClick={nextPage} content="Next" />
            </ButtonWrapper>
          </ActionButtonContainer>
        </ActionContainer>
      </AppWrapper>
    </NavigatorContext.Provider>
  );
};

const PageContainer = styled.div`
  padding: 20px;
  min-height: 40%;
`;

export const Pagify = PageContent => props => {
  return (
    <PageContainer>
      <NavigatorContext.Consumer>
        {next => (
          <PageContent next={next} {...props} />
        )}
      </NavigatorContext.Consumer>
    </PageContainer>
  );
};
