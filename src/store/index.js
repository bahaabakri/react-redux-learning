import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import {cartReducer} from "./cart"
import {notificationReducer} from './notification'
export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        notification: notificationReducer
    }
})