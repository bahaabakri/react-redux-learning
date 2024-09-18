import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    isAuthenticated: false
}

const authSlice =  createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})
const authActions = authSlice.actions
const authReducer = authSlice.reducer
export {authActions, authReducer}