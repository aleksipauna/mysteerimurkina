import React, { useState, useEffect } from "react";
import { Pagify, Navigator } from "./Navigator";
import Header from './Header'
import LandingPage from './Page/LandingPage'
import ChooseFirst from "./Page/ChooseFirst";
import Constraints from './Page/Constraints'
import AdditionalProducts from './Page/AdditionalProducts'
import FinalPage from './Page/FinalPage'
import OrderDone from './OrderDone'
import { getPrediction } from '../services'

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
  const [additional, setAdditional] = useState([])
  const [landed, setLanded] = useState(false)
  const [orderDone, setOrderDone] = useState(false)

  const resetAdditional = () => setAdditional([])

  const handleSetAdditional = (i) => {
    if (additional.includes(i)) setAdditional(additional.filter(item => item !== i))
    else setAdditional(additional.concat(i))
  }

  useEffect(() => {
    if (orderDone) {
      console.log('DONE!', getPrediction([selectedCategory], allergines, diet))
    }
  }, [orderDone])

  const pages = [
    { page: <ChooseFirst setCategory={(c) => setSelectedCategory(c)} content="Valitse" />, index: 1, title: 'What kind of food do you want?' },
    { page: <Constraints setDiet={setDiet} setAllergines={setAllergines} />, index: 2, title: 'Do you have any allergies or diets?' },
    { page: <AdditionalProducts resetAdditional={resetAdditional} addAdditional={handleSetAdditional} />, index: 3, title: "Additional products" },
    { page: <FinalPage additional={additional}  />, index: 4, title: "Order details" }
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
