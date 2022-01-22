import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { store } from '../../types/store';
import { searchItems } from '../../store';
import { ThemeLink } from '../common/ThemeLink';
import { DropdownButton } from './DropdownButton';
import { Cart } from '../Cart/Cart';
import {
  ControlWrapper,
  Find,
  FindButton,
  FindGoods,
  HomePageLink,
  SideTitle,
  Controls,
  CategoryLinks,
  Header,
} from './styledComponents';
import { useCategoriesLoad } from '../../customHooks/useCategoriesLoad';

const CategoryLink = styled(ThemeLink)`
  margin: 0 10px 10px;
`;

export const SearchPanel: React.FunctionComponent = () => {
  const searchQuery = useSelector<store, store['searchQuery']>(
    (state) => state.searchQuery
  );
  const [value, setValue] = useState(searchQuery);
  const dispatch = useDispatch();
  const router = useRouter();
  const { category = '' } = router.query;
  const categories = useCategoriesLoad();

  const navigateToSearch = (query = '') => {
    dispatch(searchItems(query));
    const categoryLink = category ? `category/${category}/` : '';
    router.push(`/${categoryLink}`);
  };

  return (
    <Header>
      <Find>
        <SideTitle>
          <HomePageLink
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
          >
            All goods
          </HomePageLink>
        </SideTitle>
        <Controls>
          <ControlWrapper>
            <FindGoods
              placeholder="find goods"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setValue('');
                  navigateToSearch('');
                }
                if (e.key === 'Enter') {
                  navigateToSearch(value);
                }
              }}
            ></FindGoods>
            <FindButton
              onClick={() => {
                navigateToSearch(value);
              }}
            >
              Search
            </FindButton>
          </ControlWrapper>
          <ControlWrapper>
            <DropdownButton />
          </ControlWrapper>
        </Controls>
        <Cart />
      </Find>
      <CategoryLinks>
        {categories.map((siteCategory, id) => (
          <CategoryLink
            key={id}
            active={
              category.toString().toLowerCase() === siteCategory.toLowerCase()
            }
            href={`/category/${siteCategory}`}
          >
            {siteCategory.charAt(0).toUpperCase() + siteCategory.slice(1)}
          </CategoryLink>
        ))}
      </CategoryLinks>
    </Header>
  );
};
