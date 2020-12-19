import { startLoadingType, stopLoadingType } from "../loadingState/actions";

export const loadingReducer = (
  state: boolean = false,
  action: startLoadingType | stopLoadingType
) => {
  switch (action.type) {
    case "loading/start":
      return true;
    case "loading/stop":
      return false;
    default:
      return state;
  }
};
