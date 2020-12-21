import { item } from "../types/item";

export const generateItem = (id = 1): item => ({
  id,
  category: "test",
  image: "",
  description: "",
  price: 1,
  title: "",
});
