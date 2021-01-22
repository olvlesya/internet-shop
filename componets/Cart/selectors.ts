import { createSelector } from "reselect";
import { store } from "../../types/store";

const cartSelector = (state: store) => state.cart;

export const countSelector = createSelector(cartSelector, (cart) =>
  Object.keys(cart).reduce((acc, itemId) => acc + cart[itemId].count, 0)
);
