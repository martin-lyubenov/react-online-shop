import { configureStore } from "@reduxjs/toolkit";
import toggleVisibility from "./toggleVisibility";
import itemsSlice from "./item";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    toggleVisibility: toggleVisibility.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
