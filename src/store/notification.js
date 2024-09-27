import { createSlice} from "@reduxjs/toolkit";

const initialNotificationState = {
    title: '',
    message: '',
    status: '',
    isShow:false
};

const notificationSlice = createSlice({
    name:'notification',
    initialState: initialNotificationState,
    reducers: {
        showNotification(state, action) {
            state.title= action.payload.title;
            state.message= action.payload.message;
            state.status= action.payload.status;
            state.isShow= true;
        },
        hideNotification(state) {
            state.isShow = false;
        }
    }
})

const notificationActions = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;
export {notificationActions, notificationReducer}