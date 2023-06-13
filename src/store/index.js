import { configureStore } from "@reduxjs/toolkit";
import cartToggleSlice from "./cartToggle";
import itemsSlice from "./item";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    cartToggle: cartToggleSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
