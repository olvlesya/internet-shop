import React from "react";
import styled from "styled-components";

const SideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex: start;
  width: 200px;
`;

const SideLink = styled.a`
  color: #ff7733;
  text-decoration: none;
  font-size: 18px;
`;

const SideTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.3px;
`;

const SideCategories = styled.h2`
  font-size: 24px;
`;

export const SideMenu: React.FunctionComponent = () => {
  return (
    <SideWrapper>
      <SideTitle>All goods</SideTitle>
      <SideCategories>Categories</SideCategories>
      <SideLink href="Footwear">Footwear</SideLink>
      <SideLink href="Clothes">Clothes</SideLink>
    </SideWrapper>
  );
};
