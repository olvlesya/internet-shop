import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { store } from "../../types/store";
import { searchItems } from "../../store";
import { ThemeLink } from "../common/ThemeLink";
import { DropdownButton } from "./DropdownButton";
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
} from "./styledComponents";
import { categories } from "../../routes";

const CategoryLink = styled(ThemeLink)`
  margin: 0 10px 10px;
`;

export const SearchPanel: React.FunctionComponent = () => {
  const searchQuery = useSelector<store, store["searchQuery"]>(
    (state) => state.searchQuery
  );
  const [value, setValue] = useState(searchQuery);
  const dispatch = useDispatch();
  const router = useRouter();
  const { category = "" } = router.query;

  return (
    <Header>
      <Find>
        <SideTitle>
          <HomePageLink
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
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
        </Controls>
      </Find>
      <CategoryLinks>
        {categories.map((siteCategory, id) => (
          <CategoryLink
            key={id}
            active={
              category.toString().toLowerCase() ===
              siteCategory.title.toLowerCase()
            }
            href={siteCategory.route}
          >
            {siteCategory.title}
          </CategoryLink>
        ))}
      </CategoryLinks>
    </Header>
  );
};
