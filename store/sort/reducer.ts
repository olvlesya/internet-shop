import { sortDescType, sortAscType } from "../sort/actions";

type State = "asc" | "desc";

export const sortReducer = (
  state: State = "asc",
  action: sortDescType | sortAscType
) => {
  switch (action.type) {
    case "sort/desc":
      return "desc";
    case "sort/asc":
      return "asc";
    default:
      return state;
  }
};
