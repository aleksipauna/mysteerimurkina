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
  const [selectedCategory, setSelectedCategory] = useState([])
  const [allergines, setAllergines] = useState([])
  const [diet, setDiet] = useState([])
  const [additional, setAdditional] = useState([])
  const [landed, setLanded] = useState(false)
  const [orderDone, setOrderDone] = useState(false)
  const [prediction, setPrediction] = useState(null)
  const [servings, setServings] = useState(-1)

  const resetAdditional = () => setAdditional([])
  const resetSelectedCategory = () => setSelectedCategory([])

  const handleSetAdditional = (i) => {
    if (additional.includes(i)) setAdditional(additional.filter(item => item !== i))
    else setAdditional(additional.concat(i))
  }

  useEffect(() => {
    if (orderDone) {
      setPrediction(getPrediction(selectedCategory, allergines, diet))
    }
  }, [orderDone])

  const pages = [
    { page: <ChooseFirst resetSelectedCategory={resetSelectedCategory} setCategory={(c) => setSelectedCategory(c)} content="Valitse" />, index: 1, title: 'What kind of food do you want?' },
    { page: <Constraints setDiet={setDiet} setAllergines={setAllergines} />, index: 2, title: 'Do you have any allergies or diets?' },
    { page: <AdditionalProducts resetAdditional={resetAdditional} addAdditional={handleSetAdditional} />, index: 3, title: "Additional products" },
    { page: <FinalPage setServings={setServings} additional={additional}  />, index: 4, title: "Order details" }
  ];
  const resetPage = () => {
        setSelectedCategory([])
        setAllergines([])
        setDiet([])
        setAdditional([])
        setLanded(false)
        setOrderDone(false)
        setPrediction(null)
        setServings(-1)
  }
  return (
    <>
      <Header onClick={resetPage} />
      {
        landed ?
          orderDone ?  <OrderDone servings={servings} recipe={prediction} />: <Navigator selectedCategory={selectedCategory} pages={pages} onConfirm={() => setOrderDone(true)} /> :
          <LandingPage onStart={() => setLanded(true)} />
      }
    </>
  )
};

export default Main;
