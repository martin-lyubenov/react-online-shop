import { filter, filterByOwner } from "./queries";

export const endpoints = {
  login: "/login",
  register: "/users",
  allFruits: "/classes/Products",
  deleteFruit: "/classes/Products/",
  byProduct: (productId) => `/classes/Products?${filter("objectId", productId)}`,
  createCart: "/classes/Cart",
  byOwnerId: (ownerId) => `/classes/Cart?${filterByOwner(ownerId)}`,
  updateCart: (cartId) => `/classes/Cart/${cartId}`
};
