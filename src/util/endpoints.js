import { filter, filterByOwner } from "./queries";

export const endpoints = {
  login: "/login",
  register: "/users",
  products: "/classes/Products",
  deleteProduct: "/classes/Products/",
  byProductId: (productId) => `/classes/Products?${filter("objectId", productId)}`,
  createCart: "/classes/Cart",
  byOwnerId: (ownerId) => `/classes/Cart?${filterByOwner(ownerId)}`,
  updateCart: (cartId) => `/classes/Cart/${cartId}`
};
