import React from "react";
import { Pagify, Navigator } from "./Navigator";

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
    { page: <TestPage content="page 1" />, index: 1 },
    { page: <TestPage content="page 2" />, index: 2 },
    { page: <TestPage content="page 3" />, index: 3 },
    { page: <TestPage content="page 4" />, index: 4 },
  ];

  return <Navigator pages={pages} />;
};

export default Main;
