import { searchQueryReducer } from "./reducer";
import { searchItems } from "./actions";

describe("searchQueryReducer", () => {
  test("should return payload for search/start action", () => {
    const query = "test";
    expect(searchQueryReducer("", searchItems(query))).toBe(query);
  });
});
