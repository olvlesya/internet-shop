export type startLoadingType = {
  type: "loading/start";
};
export const startLoading = (): startLoadingType => ({ type: "loading/start" });

export type stopLoadingType = {
  type: "loading/stop";
};
export const stopLoading = (): stopLoadingType => ({ type: "loading/stop" });
