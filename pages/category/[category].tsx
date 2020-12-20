import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../../componets/common/Spinner";
import { PageLayout } from "../../componets/common";
import { item } from "../../types/item";
import { store } from "../../types/store";
import { itemsInit, startLoading, stopLoading } from "../../store";
import { SearchResult } from "../../componets/SearchResults";

export default function Home() {
  const router = useRouter();
  const { category } = router.query;
  const isLoading = useSelector<store, store["isLoading"]>(
    (state) => state.isLoading
  );
  const sort = useSelector<store, store["sort"]>((state) => state.sort);
  const searchQuery = useSelector<store, store["searchQuery"]>(
    (state) => state.searchQuery
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!category) return;
    dispatch(startLoading());
    dispatch(itemsInit([]));

    const limit = searchQuery.trim() === "" ? "limit=8" : "";

    fetch(
      `https://fakestoreapi.com/products/category/${category}?${limit}&sort=${sort}`
    )
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
  }, [sort, searchQuery, category]);

  return (
    <PageLayout>
      <SearchResult />
      {isLoading && <Spinner />}
    </PageLayout>
  );
}
