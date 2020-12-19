import { searchQueryType } from "./actions";

export const searchQueryReducer = (
  state: string = "",
  action: searchQueryType
) => {
  if (action.type === "search/start") {
    return action.payload;
  } else {
    return state;
  }
};
