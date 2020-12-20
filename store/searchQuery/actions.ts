export type searchQueryType = {
  type: "search/start";
  payload: string;
};
export const searchItems = (query: string): searchQueryType => ({
  type: "search/start",
  payload: query,
});
