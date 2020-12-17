import React from "react";
import styled from "styled-components";
import { DropdownButton } from "../DropdownButton";
import { Button } from "./Button";

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

/* for aside*/

const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  flex: start;
  width: 200px;
`;

const SideLink = styled.a`
  color: #ffc67f;
  text-decoration: none;
  font-size: 18px;
`;

const SideTitle = styled.h1`
  font-size: 30px;
  letter-spacing: 0.3px;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const SideCategories = styled.h2`
  font-size: 24px;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 90%;
  max-width: 1600px;
`;

export const PageLayout: React.FunctionComponent = ({ children }) => {
  return (
    <MainPage>
      <SideMenu>
        <SideTitle>All goods</SideTitle>
        <SideCategories>Categories</SideCategories>

        <SideLink href="Footwear">Footwear</SideLink>
        <SideLink href="Clothes">Clothes</SideLink>
      </SideMenu>

      <Main>
        <Find>
          <DropdownButton />
          <FindWrapper>
            <FindGoods placeholder="find goods"></FindGoods>
            <FindButton>Search</FindButton>
          </FindWrapper>
        </Find>

        {children}
      </Main>
    </MainPage>
  );
};
