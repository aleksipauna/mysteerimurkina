import React from "react";
import { Pagify, Navigator } from "./Navigator";
import ChooseFirst from "./Page/ChooseFirst";
import Constraints from './Page/Constraints'
import AdditionalProducts from './Page/AdditionalProducts'


const TestPage = Pagify(props => {
  return (
    <>
      <p>{props.content}</p>
    </>
  );
});

const Main = () => {
  const pages = [
    { page: <ChooseFirst content="Valitse" />, index: 1, title: 'What kind of food do you want?' },
    { page: <Constraints />, index: 2, title: 'Do you have any allergies or diets?' },
    { page: <AdditionalProducts />, index: 3, title: "Additional products" },
    { page: <TestPage content="page 4" />, index: 4, title: "4" }
  ];

  return <Navigator pages={pages} />;
};

export default Main;
