import React from "react";
import styled from "styled-components";
import { DropdownButton } from "./DropdownButton";
import { Button } from "./../common/Button";

const buttonWidth = 75;
const searchWidth = 470;

const FindButton = styled(Button)`
  width: ${buttonWidth}px;
`;

const FindGoods = styled.input`
  width: ${searchWidth}px;
  height: 30px;
  border: 1px solid #1f1d1d;
  margin-bottom: 20px;
  padding: 2px 2px 1px 6px;
  box-sizing: border-box;
`;

const FindWrapper = styled.div`
  display: flex;
`;

const Find = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchPanel: React.FunctionComponent = () => {
  return (
    <Find>
      <DropdownButton />
      <FindWrapper>
        <FindGoods placeholder="find goods"></FindGoods>
        <FindButton>Search</FindButton>
      </FindWrapper>
    </Find>
  );
};
