import { configureStore } from "@reduxjs/toolkit";
import cartToggleSlice from "./cartToggle";
import itemsSlice from "./item";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    cartToggle: cartToggleSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
