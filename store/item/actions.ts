import { item } from "../../types/item";

export type itemLoadType = {
  type: "item/load";
  payload: item;
};
export const itemLoad = (loadedItem: item): itemLoadType => ({
  type: "item/load",
  payload: loadedItem,
});
