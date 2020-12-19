import { item } from "../../types/item";
import { itemLoadType } from "./actions";

export const itemReducer = (
  state: item | null = null,
  action: itemLoadType
) => {
  if (action.type === "item/load") {
    return action.payload;
  }
  return state;
};
