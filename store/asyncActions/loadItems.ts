import { ThunkAction } from "redux-thunk";
import {
  startLoadingType,
  startLoading,
  stopLoadingType,
  stopLoading,
} from "../loadingState/actions";
import { itemsInitType, itemsInit } from "../items/actions";
import { item } from "../../types/item";
import { store } from "../../types/store";

const BASE_URL = "https://fakestoreapi.com";

export const loadItems = (
  searchQuery: store["searchQuery"],
  limit: number,
  sort: store["sort"],
  category?: string
): ThunkAction<
  void,
  store,
  unknown,
  startLoadingType | stopLoadingType | itemsInitType
> => {
  return (dispatch) => {
    dispatch(startLoading());
    dispatch(itemsInit([]));

    const limitQuery = searchQuery.trim() === "" ? `limit=${limit}` : "";

    const link = category
      ? `${BASE_URL}/products/category/${category}?${limit}&sort=${sort}`
      : `${BASE_URL}/products?${limitQuery}&sort=${sort}`;

    fetch(link)
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
  };
};
