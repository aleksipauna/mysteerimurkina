import React from "react";
import styled from "styled-components";
import { Pagify } from "../Navigator";
import Multiselect from "../Multiselect";

const ConstraintsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MultiselectContainer = styled.div`
  flex: 0.45;
`;

const mockOptions = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" }
];

const allergenOptions = [
  { key: '1', text: 'Nuts', value: 'nuts' },
  { key: '2', text: 'Fish', value: 'fish' },
  { key: '3', text: 'Dairy', value: 'dairy' },
]

const dietOptions = [
  { key: '1', text: 'Vegetarian', value: 'vegetarian' },
  { key: '2', text: 'Vegan', value: 'vegan' },
  { key: '3', text: 'Gluten free', value: 'dairy' },
]

const ConstraintsPage = props => {
  return (
    <ConstraintsContainer>
      <MultiselectContainer>
        <Multiselect
          options={allergenOptions}
          placeholder='Allergens'
        />
      </MultiselectContainer>
      <MultiselectContainer>
        <Multiselect
          options={dietOptions}
          placeholder='Diet'
        />
      </MultiselectContainer>
    </ConstraintsContainer>
  );
};

export default Pagify(ConstraintsPage);
