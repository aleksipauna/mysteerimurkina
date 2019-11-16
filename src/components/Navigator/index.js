import React, { useState, createContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import { IoIosCheckmark } from 'react-icons/io'

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
  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  margin: 0 20px;
`;

const AppWrapper = styled.div`
  flex: 1;
  max-width: 60%;
  padding: 20px 10px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  color: #47525e;
`;

export const Navigator = ({ pages }) => {
  const [activeIndex, setActiveIndex] = useState(1);

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
      <AppWrapper>
        <ProgressBar current={activeIndex} total={pages.length} />
        <PageTitle>{activePage.title}</PageTitle>
        {activePage.page}
        <ActionContainer>
          <ActionButtonContainer>
            <ButtonWrapper>
              <Button disabled={activeIndex === 1} onClick={prevPage} content="Back" />
            </ButtonWrapper>
            {activeIndex !== pages.length && (
              <ButtonWrapper>
                <Button onClick={nextPage} content="Next" />
              </ButtonWrapper>
            )}
            {activeIndex === pages.length && (
              <ButtonWrapper>
                <Button icon={<IoIosCheckmark style={{ height: '30px', width: '30px' }} />} onClick={nextPage} content="Confirm" />
              </ButtonWrapper>
            )}
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
        {next => <PageContent next={next} {...props} />}
      </NavigatorContext.Consumer>
    </PageContainer>
  );
};
