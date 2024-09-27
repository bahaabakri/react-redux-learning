import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    isCartShown: false,
    items: [],
    totalQuantity: 0
}

const cartSlice =  createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.isCartShown = !state.isCartShown
        },
        addToCart(state, action) {
            state.totalQuantity++;
            if (state.items.length > 0) {
                const elementIndex = state.items.findIndex(el => el.productId === action.payload.item.productId)
                if (elementIndex < 0) {
                    state.items.push({
                        ...action.payload.item,
                        quantity: 1,
                        total: action.payload.item.price
                    })
                } else {
                    const newQuantity = state.items[elementIndex].quantity + 1
                    state.items[elementIndex] = {
                        ...action.payload.item,
                        quantity: newQuantity,
                        total: action.payload.item.price * newQuantity
                    }
                }
            } else {
                state.items.push({
                    quantity: 1,
                    total: action.payload.item.price,
                    ...action.payload.item
                })
            }
        },
        removeFromCart(state, action) {
            state.totalQuantity--;
            const elementIndex = state.items.findIndex(el => el.productId === action.payload.productId)
            if (elementIndex > -1) {
                if (state.items[elementIndex].quantity == 1) {
                    state.items.splice(elementIndex, 1)
                } else {
                    const element = state.items[elementIndex]
                    const newQuantity = element.quantity - 1
                    state.items[elementIndex] = {
                        ...element,
                        quantity: newQuantity,
                        total: element.price * newQuantity
                    }
                }
                
            }
        }
    }
})
const cartActions = cartSlice.actions
const cartReducer = cartSlice.reducer
export {cartActions, cartReducer}