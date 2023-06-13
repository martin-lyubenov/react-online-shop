import { filter, filterByOwner } from "./queries";

export const endpoints = {
  login: "/login",
  register: "/users",
  allFruits: "/classes/AllFruits",
  deleteFruit: "/classes/AllFruits/",
  byFruitId: (fruitId) => `/classes/AllFruits?${filter("objectId", fruitId)}`,
  createCart: "/classes/Cart",
  byOwnerId: (ownerId) => `/classes/Cart?${filterByOwner(ownerId)}`,
  updateCart: (cartId) => `/classes/Cart/${cartId}`
};
