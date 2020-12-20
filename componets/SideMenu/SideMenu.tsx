import React from "react";
import styled from "styled-components";
import { SideLink } from "../common/Link";

const SideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex: start;
  width: 200px;
  margin-left: 50px;
`;

const SideTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.3px;
`;

const HomePageLink = styled.a`
  text-decoration: none;
  color: #292929;
`;

const SideCategories = styled.h2`
  font-size: 1.2rem;
`;
const SideLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

export const SideMenu: React.FunctionComponent = () => {
  return (
    <SideWrapper>
      <SideTitle>
        <HomePageLink href="/">All goods</HomePageLink>
      </SideTitle>

      <SideCategories>Categories</SideCategories>
      <SideLinkSection>
        <SideLink href="category/men clothing">Men clothing</SideLink>
        <SideLink href="category/women clothing">Women clothing</SideLink>
        <SideLink href="/category/jewelery">Jewelery</SideLink>
        <SideLink href="/category/electronics">Electronics</SideLink>
      </SideLinkSection>
    </SideWrapper>
  );
};
