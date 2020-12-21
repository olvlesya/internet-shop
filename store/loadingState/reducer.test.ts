import { loadingReducer } from "./reducer";
import { startLoading, stopLoading } from "./actions";

describe("loadingReducer", () => {
  test("should return true for loading/start action", () => {
    expect(loadingReducer(false, startLoading())).toBe(true);
    expect(loadingReducer(true, startLoading())).toBe(true);
    expect(loadingReducer(undefined, startLoading())).toBe(true);
  });

  test("should return false for loading/stop action", () => {
    expect(loadingReducer(false, stopLoading())).toBe(false);
    expect(loadingReducer(true, stopLoading())).toBe(false);
    expect(loadingReducer(undefined, stopLoading())).toBe(false);
  });
});
