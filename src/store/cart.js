import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    isCartShown: false,
    items: []
}

const cartSlice =  createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.isCartShown = !state.isCartShown
        },
        addToCart(state, action) {
            const isElementExist = state.items.find(el => el.id === action.payload.item.id)
            if (!isElementExist) {
                state.items.push({
                    quantity: 1,
                    ...action.payload.item
                })
            } else {
                
            }
        }
    }
})
const cartActions = cartSlice.actions
const cartReducer = cartSlice.reducer
export {cartActions, cartReducer}