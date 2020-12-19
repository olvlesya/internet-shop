export type sortDescType = {
  type: "sort/desc";
};
export const sortDesc = (): sortDescType => ({
  type: "sort/desc",
});

export type sortAscType = {
  type: "sort/asc";
};
export const sortAsc = (): sortAscType => ({
  type: "sort/asc",
});
