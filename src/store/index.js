import { configureStore } from "@reduxjs/toolkit";
import cartToggleSlice from "./cartToggle";
import itemsSlice from "./item";

const store = configureStore({
  reducer: {
    cartToggle: cartToggleSlice.reducer,
    items: itemsSlice.reducer,
  },
});

export default store;
