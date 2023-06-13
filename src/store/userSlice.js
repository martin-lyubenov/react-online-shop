import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: JSON.parse(localStorage.getItem("userData")) };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData(state) {
      state.user = JSON.parse(localStorage.getItem("userData"));
    },

    setUserData(state, action) {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      state.user = JSON.parse(localStorage.getItem("userData"));
    },

    clearUserData(state) {
      state.user = null;
      localStorage.removeItem("userData");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
