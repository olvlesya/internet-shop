import { cartAddType, cartRemoveType, cartRemovePositionType } from './actions';
import { store } from '../../types/store';

export const cartReducer = (
  state: store['cart'] = {},
  action: cartAddType | cartRemoveType | cartRemovePositionType
) => {
  if (action.type === 'cart/add') {
    const itemInCart = state[action.payload.id];
    if (itemInCart) {
      return {
        ...state,
        [action.payload.id]: {
          ...itemInCart,
          count: itemInCart.count + 1,
        },
      };
    } else {
      return {
        ...state,
        [action.payload.id]: {
          item: action.payload,
          count: 1,
        },
      };
    }
  }
  if (action.type === 'cart/remove') {
    const itemInCart = state[action.payload];
    if (itemInCart) {
      const newCount = itemInCart.count - 1;
      return {
        ...state,
        [action.payload]: {
          ...itemInCart,
          count: newCount >= 1 ? newCount : 1,
        },
      };
    }
    return state;
  }
  if (action.type === 'cart/remove-position') {
    const { [action.payload]: _skip, ...rest } = state;
    return rest;
  }
  return state;
};
