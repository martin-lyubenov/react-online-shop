import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalCost: 0 };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    replaceCart(state, aciton) {
      state.totalQuantity = aciton.payload.totalQuantity;
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
        (item) => item.id === action.payload.id
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

export const fetchCart = (counter) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://react-http-test-fcec6-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (response.ok === false) {
        throw new Error("Something went wrong");
      }

      const data = response.json();

      return data;
    };

    try {
      const cart = await getRequest();
      dispatch(
        itemsActions.replaceCart({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        })
      );
      return cart;
    } catch (error) {
      alert("Ooops, something went wrong");
    }
  };
};

export default itemsSlice;
