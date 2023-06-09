import { createSlice } from "@reduxjs/toolkit";

const initialState = {isShown: false};

const cartToggleSlice = createSlice({
    name: 'cartToggle',
    initialState,
    reducers: {
        toggleVisibility(state){
            state.isShown = !state.isShown;
        }
    }
})

export const cartToggleActions = cartToggleSlice.actions;
export default cartToggleSlice;