import { itemReducer } from "./reducer";
import { itemLoad } from "./actions";
import { generateItem } from "../../testUtils/utilities";

describe("itemReducer", () => {
  test("should return payload for item/load action", () => {
    const item = generateItem();
    expect(itemReducer(null, itemLoad(item))).toBe(item);
  });
});
