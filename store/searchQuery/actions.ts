export type searchQueryType = {
  type: "search/start";
  payload: string;
};
export const searchItems = (title: string): searchQueryType => ({
  type: "search/start",
  payload: title,
});
