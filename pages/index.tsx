import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../componets/common/Spinner";
import styled from "styled-components";
import { Card } from "../componets/Card";
import { PageLayout } from "../componets/common";
import { item } from "../types/item";
import { store } from "../types/store";
import { itemsInit, startLoading, stopLoading } from "../store";

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

export default function Home() {
  const items = useSelector<store, store["items"]>((state) => state.items);
  const isLoading = useSelector<store, store["isLoading"]>(
    (state) => state.isLoading
  );
  const sort = useSelector<store, store["sort"]>((state) => state.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    dispatch(itemsInit([]));

    fetch(`https://fakestoreapi.com/products?limit=8&sort=${sort}`)
      .then((res) => res.json() as Promise<item[]>)
      .then((json) => {
        dispatch(stopLoading());
        dispatch(itemsInit(json));
      });
  }, [sort]);

  return (
    <PageLayout>
      <Items>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Items>
      {isLoading && <Spinner />}
    </PageLayout>
  );
}
