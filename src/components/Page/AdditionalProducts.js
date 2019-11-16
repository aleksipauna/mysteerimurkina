import React from "react";
import styled from "styled-components";
import { Pagify } from "../Navigator";
import Note from "../Note";
import SelectList from "../SelectList";

const mockItems = [{ id: 1, name: "testi", img: "" }];

const SelectListWrapper = styled.div`
  margin-top: 20px;
`;

const AdditionalProductsPage = props => {
  return (
    <div>
      <Note
        note={`Your mystery recipe may include these products that you've bought recently. If you still need them you can choose them below.`}
      />
      <SelectListWrapper>
        <SelectList items={mockItems} />
      </SelectListWrapper>
    </div>
  );
};

export default Pagify(AdditionalProductsPage);
