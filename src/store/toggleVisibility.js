import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartIsVisible: false, mobileMenuIsVisible: false};

const toggleVisibilitySlice = createSlice({
    name: 'cartToggle',
    initialState,
    reducers: {
        toggleCartVisibility(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        toggleMobileMenuVisibility(state){
            state.mobileMenuIsVisible = !state.mobileMenuIsVisible;
        }
    }
})

export const toggleVisibilityActions = toggleVisibilitySlice.actions;
export default toggleVisibilitySlice;