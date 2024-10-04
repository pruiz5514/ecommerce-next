import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: 0
    },
    reducers: {
        increment: (state) => {
            state.cart += 1
        }
    }
})
export const { increment } = cartSlice.actions
export default cartSlice.reducer;