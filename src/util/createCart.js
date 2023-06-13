import { post } from "../data/api";
import { endpoints } from "./endpoints";

export async function createCart(result) {
  const owner = {
    __type: "Pointer",
    className: "_User",
    objectId: result.objectId,
  };

  const responseCart = await post(endpoints.createCart, {
    cartItems: [],
    totalQuantity: "0",
    totalPrice: "0",
    owner,
  });

  const resultCart = await responseCart.json();
  return resultCart.objectId;
}
