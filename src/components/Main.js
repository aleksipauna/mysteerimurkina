import React, { useState } from "react";
import { Pagify, Navigator } from "./Navigator";
import Header from './Header'
import LandingPage from './Page/LandingPage'
import ChooseFirst from "./Page/ChooseFirst";
import Constraints from './Page/Constraints'
import AdditionalProducts from './Page/AdditionalProducts'
import FinalPage from './Page/FinalPage'
import OrderDone from './OrderDone'

const TestPage = Pagify(props => {
  return (
    <>
      <p>{props.content}</p>
    </>
  );
});

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [allergines, setAllergines] = useState([])
  const [diet, setDiet] = useState([])
  const [landed, setLanded] = useState(false)
  const [orderDone, setOrderDone] = useState(false)

  const pages = [
    { page: <ChooseFirst setCategory={(c) => setSelectedCategory(c)} content="Valitse" />, index: 1, title: 'What kind of food do you want?' },
    { page: <Constraints setDiet={setDiet} setAllergines={setAllergines} />, index: 2, title: 'Do you have any allergies or diets?' },
    { page: <AdditionalProducts />, index: 3, title: "Additional products" },
    { page: <FinalPage  />, index: 4, title: "Finish line" }
  ];

  return (
    <>
      <Header />
      {
        landed ?
          orderDone ?  <OrderDone/>: <Navigator pages={pages} onConfirm={() => setOrderDone(true)} /> :
          <LandingPage onStart={() => setLanded(true)} />
      }
    </>
  )
};

export default Main;
