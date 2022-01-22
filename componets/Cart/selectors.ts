import { createSelector } from 'reselect';
import { store } from '../../types/store';

const cartSelector = (state: store) => state.cart;

export const countSelector = createSelector(cartSelector, (cart) =>
  Object.keys(cart).reduce((acc, itemId) => acc + cart[itemId].count, 0)
);

export const itemsSelector = createSelector(cartSelector, (cart) =>
  Object.keys(cart).map((itemId) => cart[itemId])
);

export const cartTotal = createSelector(cartSelector, (cart) =>
  Object.keys(cart).reduce((acc, itemId) => {
    const { item, count } = cart[itemId];
    return acc + count * item.price;
  }, 0)
);
