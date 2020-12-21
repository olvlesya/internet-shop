import { sortReducer } from "./reducer";
import { sortAsc, sortDesc } from "./actions";

describe("sortReducer", () => {
  test("should return asc for sort/asc action", () => {
    expect(sortReducer("asc", sortAsc())).toBe("asc");
  });

  test("should return desc for sort/desc action", () => {
    expect(sortReducer("asc", sortDesc())).toBe("desc");
  });
});
