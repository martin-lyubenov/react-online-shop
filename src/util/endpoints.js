import { filter } from "./queries";

export const endpoints = {
    login: "/login",
    register: "/users",
    allFruits: "/classes/AllFruits",
    deleteFruit: "/classes/AllFruits/",
    byFruitId: fruitId => `/classes/AllFruits?${filter('objectId', fruitId)}`
  };