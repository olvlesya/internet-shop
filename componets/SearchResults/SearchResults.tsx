import React from "react";
import { Card } from "../../componets/Card";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { store } from "../../types/store";

const Items = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 40px;
  padding: 0 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchResult: React.FunctionComponent = () => {
  const items = useSelector<store, store["items"]>((state) => state.items);
  return (
    <Items>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Items>
  );
};
