import { item } from "../../types/item";

export type itemsInitType = {
  type: "items/init";
  payload: Array<item>;
};
export const itemsInit = (items: Array<item>): itemsInitType => ({
  type: "items/init",
  payload: items,
});
