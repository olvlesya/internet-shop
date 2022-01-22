import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ThemeLink } from '../common/ThemeLink';
import { useCategoriesLoad } from '../../customHooks/useCategoriesLoad';

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
  const router = useRouter();
  const { category = '' } = router.query;
  const categories = useCategoriesLoad();

  return (
    <SideWrapper>
      <SideCategories>Categories</SideCategories>
      <SideLinkSection>
        {categories.map((siteCategory, id) => (
          <ThemeLink
            key={id}
            active={
              category.toString().toLowerCase() === siteCategory.toLowerCase()
            }
            href={`/category/${siteCategory}`}
          >
            {siteCategory.charAt(0).toUpperCase() + siteCategory.slice(1)}
          </ThemeLink>
        ))}
      </SideLinkSection>
    </SideWrapper>
  );
};
