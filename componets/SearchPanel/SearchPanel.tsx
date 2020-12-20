import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../types/store";
import { searchItems } from "../../store";
import { DropdownButton } from "./DropdownButton";
import { Button } from "./../common/Button";

const FindButton = styled(Button)`
  width: 75px;
`;

const FindGoods = styled.input`
  flex-grow: 1;
  height: 30px;
  border: 1px solid #1f1d1d;
  padding: 2px 2px 1px 6px;
  box-sizing: border-box;
`;

const Find = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  margin-bottom: 20px;
`;

const ControlWrapper = styled.section`
  width: 80%;
  display: flex;
  max-width: 540px;
`;

export const SearchPanel: React.FunctionComponent = () => {
  const searchQuery = useSelector<store, store["searchQuery"]>(
    (state) => state.searchQuery
  );
  const [value, setValue] = useState(searchQuery);
  const dispatch = useDispatch();

  return (
    <Find>
      <ControlWrapper>
        <FindGoods
          placeholder="find goods"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              dispatch(searchItems(""));
              setValue("");
            }
            if (e.key === "Enter") {
              dispatch(searchItems(value));
            }
          }}
        ></FindGoods>
        <FindButton
          onClick={() => {
            dispatch(searchItems(value));
          }}
        >
          Search
        </FindButton>
      </ControlWrapper>
      <ControlWrapper>
        <DropdownButton />
      </ControlWrapper>
    </Find>
  );
};
