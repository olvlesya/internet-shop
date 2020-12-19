import { item } from "../../types/item";
import { itemsInitType } from "./actions";

export const itemsReducer = (state: item[] = [], action: itemsInitType) => {
  if (action.type === "items/init") {
    return action.payload;
  }
  return state;
};
