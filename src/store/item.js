import { createSlice } from "@reduxjs/toolkit";
import { get, put } from "../data/api";
import { endpoints } from "../util/endpoints";
import { userActions } from "./user";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
  hasChanged: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    replaceCart(state, aciton) {
      state.totalQuantity = aciton.payload.totalQuantity;
      state.totalCost = aciton.payload.totalCost;
      state.items = aciton.payload.items;
    },
    addItem(state, action) {
      state.hasChanged = true;
      state.totalQuantity++;
      state.totalCost += Number(action.payload.price);

      const index = state.items.findIndex(
        (item) => item.objectId === action.payload.objectId
      );
      const existingItem = state.items[index];

      if (existingItem) {
        existingItem.qty++;
      } else {
        const newItem = { ...action.payload };
        newItem.qty = 1;
        state.items.push(newItem);
      }
    },
    increaseQty(state, action) {
      state.hasChanged = true;
      state.totalQuantity++;
      state.totalCost += Number(action.payload.price);

      const index = state.items.findIndex(
        (item) => item.objectId === action.payload.objectId
      );
      const existingItem = state.items[index];
      existingItem.qty++;
    },

    decreaseQty(state, action) {
      state.hasChanged = true;
      state.totalQuantity--;
      state.totalCost -= Number(action.payload.price);

      const index = state.items.findIndex(
        (item) => item.objectId === action.payload.objectId
      );
      const existingItem = state.items[index];

      if (existingItem.qty <= 1) {
        state.items.splice(index, 1);
      } else {
        existingItem.qty--;
      }

      // adding and subtracting items with decial value can cause a rounding error, this line of codes makes sure that if all items have been remove the price is reset
      if (state.items.length === 0) {
        state.totalCost = 0;
      }
    },

    clearCart(state) {
      state.totalCost = 0;
      state.items = [];
    }
  },
});

export const itemsActions = itemsSlice.actions;

// Thunks

export const sendCartData = (
  { cartItems, totalQuantity, totalCost },
  cartId
) => {
  return async (dispatch) => {
    const sentRequest = async () => {
      const response = await put(endpoints.updateCart(cartId), {
        cartItems,
        totalQuantity,
        totalCost,
      });

      if (response.ok === false) {
        throw new Error("Something went wrong");
      }
      return response;
    };

    try {
      await sentRequest();
    } catch (error) {
      alert("send data failed");
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await get(endpoints.byOwnerId(userId));

      if (response.ok === false) {
        throw new Error("Something went wrong");
      }

      const data = response.json();

      return data;
    };

    try {
      const cartData = await getRequest();

      dispatch(userActions.setCartId(cartData.results[0].objectId));

      const items = cartData.results[0].cartItems;
      const totalQuantity = cartData.results[0].totalQuantity;
      const totalCost = cartData.results[0].totalCost;
      dispatch(
        itemsActions.replaceCart({
          items,
          totalQuantity,
          totalCost,
        })
      );
    } catch (error) {
      alert("Fetch cart went wrong");
    }
  };
};

export default itemsSlice;
