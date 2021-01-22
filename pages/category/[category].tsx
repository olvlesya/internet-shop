import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../../componets/common/Spinner";
import { PageLayout } from "../../componets/common";
import { store } from "../../types/store";
import { loadItems } from "../../store";
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
    dispatch(loadItems(searchQuery, 8, sort, category as string));
  }, [sort, searchQuery, category]);

  return (
    <PageLayout>
      <SearchResult />
      {isLoading && <Spinner />}
    </PageLayout>
  );
}
