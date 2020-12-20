import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Spinner } from "../componets/common/Spinner";
import { PageLayout } from "../componets/common";
import { item } from "../types/item";
import { store } from "../types/store";
import { itemsInit, startLoading, stopLoading } from "../store";
import { SearchResult } from "../componets/SearchResults";

const LoadMoreButton = styled.button`
  padding: 8px;
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid #c2c0cf;
  cursor: pointer;
  color: #979797;
  :hover,
  :focus {
    color: #0a0d0f;
  }
`;
const LoadMoreButtonSection = styled.section`
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
`;

export default function Home() {
  const isLoading = useSelector<store, store["isLoading"]>(
    (state) => state.isLoading
  );
  const sort = useSelector<store, store["sort"]>((state) => state.sort);
  const searchQuery = useSelector<store, store["searchQuery"]>(
    (state) => state.searchQuery
  );
  const items = useSelector<store, store["items"]>((state) => state.items);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(itemsInit([]));

    const limitQuery = searchQuery.trim() === "" ? `limit=${limit}` : "";

    fetch(`https://fakestoreapi.com/products?${limitQuery}&sort=${sort}`)
      .then((res) => res.json() as Promise<item[]>)
      .then((json) => {
        dispatch(stopLoading());

        if (searchQuery.trim() !== "") {
          const regExp = new RegExp(searchQuery, "i");
          dispatch(
            itemsInit(
              // FIXME: fakestoreapi doesn't support filtering
              json.filter(
                (item) =>
                  regExp.test(item.title) || regExp.test(item.description)
              )
            )
          );
        } else {
          dispatch(itemsInit(json));
        }
      });
  }, [sort, searchQuery, limit]);

  return (
    <PageLayout>
      <SearchResult />
      {isLoading && <Spinner />}
      {items.length < limit ? null : (
        <LoadMoreButtonSection>
          <LoadMoreButton
            onClick={() => {
              setLimit(limit + 8);
            }}
          >
            Load more
          </LoadMoreButton>
        </LoadMoreButtonSection>
      )}
    </PageLayout>
  );
}
