import React from "react";
import styled from "styled-components";
import { SearchPanel } from "./../SearchPanel";
import { SideMenu } from "./../SideMenu";

const Content = styled.main`
  flex-grow: 1;
  width: 90%;
  max-width: 1600px;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const PageLayout: React.FunctionComponent = ({ children }) => {
  return (
    <MainPage>
      <SideMenu />
      <Content>
        <SearchPanel />
        {children}
      </Content>
    </MainPage>
  );
};
