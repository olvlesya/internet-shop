import { itemsReducer } from "./reducer";
import { itemsInit } from "./actions";
import { generateItem } from "../../testUtils/utilities";

describe("itemsReducer", () => {
  test("should return payload for items/init action", () => {
    const items = [generateItem()];
    expect(itemsReducer([], itemsInit(items))).toBe(items);
  });
});
