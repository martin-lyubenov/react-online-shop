import { createSlice } from "@reduxjs/toolkit";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

const initialState = { items: [], totalQuantity: 0, totalCost: 0 };

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
      state.totalQuantity++;
      state.totalCost += Number(action.payload.price);

      const index = state.items.findIndex(
        (item) => item.objectId === action.payload.objectId
      );
      const existingItem = state.items[index];
      existingItem.qty++;
    },

    decreaseQty(state, action) {
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
    },
  },
});

export const itemsActions = itemsSlice.actions;

export const sendCartData = ({ items, totalQuantity }) => {
  return async (dispatch) => {
    const sentRequest = async () => {
      const response = await fetch(
        "https://react-http-test-fcec6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items, totalQuantity }),
        }
      );

      if (response.ok === false) {
        throw new Error("Something went wrong");
      }
    };

    try {
      await sentRequest();
    } catch (error) {
      alert("Ooops, something went wrong");
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await get(endpoints.byOwnerId(userId))

      if (response.ok === false) {
        throw new Error("Something went wrong");
      }

      const data = response.json();

      return data;
    };

    try {
      const cartData = await getRequest();
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
