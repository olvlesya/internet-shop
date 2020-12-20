import React from "react";
import styled from "styled-components";
import { ThemeLink } from "../common/ThemeLink";
import { categories } from "../../routes";

const SideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex: start;
  width: 200px;
  margin-left: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideCategories = styled.h2`
  font-size: 1.3rem;
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
      <SideCategories>Categories</SideCategories>
      <SideLinkSection>
        {categories.map((category, id) => (
          <ThemeLink key={id} href={category.route}>
            {category.title}
          </ThemeLink>
        ))}
      </SideLinkSection>
    </SideWrapper>
  );
};
