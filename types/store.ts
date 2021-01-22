import { item } from "./item";

export type store = {
  item: item | null;
  items: item[];
  isLoading: boolean;
  searchQuery: string;
  sort: "asc" | "desc";
  cart: Record<
    string,
    {
      count: number;
      item: item;
    }
  >;
};
