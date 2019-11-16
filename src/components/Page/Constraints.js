import React from "react";
import styled from "styled-components";
import { Pagify } from "../Navigator";
import Multiselect from "../Multiselect";
import Note from "../Note";

const ConstraintsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 0;
  };
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MultiselectContainer = styled.div`
  flex: 0.45;
`;

const mockOptions = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" }
];

const allergenOptions = [
  { key: "1", text: "Nuts", value: "nuts" },
  { key: "2", text: "Fish", value: "fish" },
  { key: "3", text: "Dairy", value: "dairy" }
];

const dietOptions = [
  { key: "1", text: "Vegetarian", value: "vegetarian" },
  { key: "2", text: "Vegan", value: "vegan" },
  { key: "3", text: "Gluten free", value: "dairy" }
];

const ConstraintsPage = props => {
  return (
    <>
      <ConstraintsContainer>
        <InputContainer>
          <MultiselectContainer>
            <Multiselect options={allergenOptions} placeholder="Allergens" />
          </MultiselectContainer>
          <MultiselectContainer>
            <Multiselect options={dietOptions} placeholder="Diet" />
          </MultiselectContainer>
        </InputContainer>
        <Note note="you can preselect your allergies and diets in your profile settings" />
      </ConstraintsContainer>
    </>
  );
};

export default Pagify(ConstraintsPage);
