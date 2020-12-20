import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { store } from "../.././types/store";
import { sortAsc, sortDesc } from "../../store";

const DropdownControl = styled.select`
  width: 100%;
  height: 30px;
  border: 1px solid #1f1d1d;
  padding: 2px 2px 1px 6px;
  box-sizing: border-box;
`;

export const DropdownButton: React.FunctionComponent = () => {
  const sort = useSelector<store, store["sort"]>((state) => state.sort);
  const dispatch = useDispatch();

  return (
    <DropdownControl
      value={sort}
      onChange={(e) => {
        if (e.target.value === "asc") {
          dispatch(sortAsc());
        }
        if (e.target.value === "desc") {
          dispatch(sortDesc());
        }
      }}
    >
      <option value="asc">Sort from low to high</option>
      <option value="desc">Sort from high to low</option>
    </DropdownControl>
  );
};
