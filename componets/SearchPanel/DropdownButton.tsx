import React, { useState } from "react";
import styled from "styled-components";

const DropdownControl = styled.select`
  width: 540px;
  height: 30px;
  border: 1px solid #1f1d1d;
  padding: 2px 2px 1px 6px;
  box-sizing: border-box;
`;

type Props = {};

export const DropdownButton: React.FunctionComponent<Props> = () => {
  const [value, setValue] = useState("1");

  return (
    <section>
      <DropdownControl
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="1">Sort from low to high</option>
        <option value="2">Sort from high to low</option>
      </DropdownControl>
    </section>
  );
};
