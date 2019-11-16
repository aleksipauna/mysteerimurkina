import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Pagify } from "../Navigator";
import Option from "./Option"


const OptionContent = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
  font-family: 'Public Sans', sans-serif;
`;

const OptionsSection = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChooseFirst = (props) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    props.resetSelectedCategory()
  }, [])
  const handleClick = (c) => {
    let newCat
    if (categories.includes(c)) {
      newCat = categories.filter((item) => item !== c)
    } else {
      newCat = categories.concat(c)
    }
    setCategories(newCat)
    props.setCategory(newCat)
  }

  return (
    <OptionsSection>
      <Option pic='238.jpeg' title="Healthy" content="Nutrient-rich but still as delicious!" selected={categories.includes('healthy')} onClick={() => handleClick('healthy')}/>
      <Option pic='10255.jpeg' title="Convenient" content="Don't want to waste time in the kitchen? Choose this to get an easy and fast recipe." selected={categories.includes('delicious')} onClick={() => handleClick('delicious')}/>
      <Option pic='4956.jpeg' title="Small carbon footprint" content="Reducing food waste while still eating low emission food? Gotcha!" selected={categories.includes('aware')}  onClick={() => handleClick('aware')}/>
      <Option pic='5796.jpeg' title="Exotic" content="Discover a new favourite." selected={categories.includes('exotic')} onClick={() => handleClick('exotic')}/>
    </OptionsSection>
  )
}

export default Pagify(ChooseFirst)