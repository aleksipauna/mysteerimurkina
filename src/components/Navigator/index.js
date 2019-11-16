import React, { useState, createContext } from "react";
import Header from "../Header";
import ProgressBar from "../ProgressBar";

const NavigatorContext = createContext();

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
      <Header />
      {activePage.page}
      {activeIndex > 1 && <button onClick={prevPage}>go back</button>}
      <ProgressBar current={activeIndex} total={pages.length} />
    </NavigatorContext.Provider>
  );
};

export const Pagify = PageContent => props => {
  return (
    <NavigatorContext.Consumer>
      {next => (
        <div>
          <PageContent next={next} {...props} />
        </div>
      )}
    </NavigatorContext.Consumer>
  );
};
