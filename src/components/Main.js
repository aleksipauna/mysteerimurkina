import React from "react";
import { Pagify, Navigator } from "./Navigator";
import ChooseFirst from "./Page/ChooseFirst"

const TestPage = Pagify(props => {
  return (
    <>
      <p>{props.content}</p>
      {/* WHEN WRAPPED WITH Pagify, PROPS WILL ALWAYS CONTAIN FUNC NEXT! */}
      <button onClick={props.next}>NEXT</button>
    </>
  );
});

const Main = () => {
  const pages = [
    { page: <ChooseFirst content="Valitse" />, index: 1 },
    { page: <TestPage content="page 2" />, index: 2 },
    { page: <TestPage content="page 3" />, index: 3 },
    { page: <TestPage content="page 4" />, index: 4 },
  ];

  return <Navigator pages={pages} />;
};

export default Main;