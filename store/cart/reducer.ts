import { cartAddType, cartRemoveType } from "./actions";
import { store } from "../../types/store";

export const cartReducer = (
  state: store["cart"] = {},
  action: cartAddType | cartRemoveType
) => {
  if (action.type === "cart/add") {
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
  if (action.type === "cart/remove") {
    return state;
  }
  return state;
};
