import userReducer from './userSlice'
import { configureStore } from "@reduxjs/toolkit";

export const appStore=configureStore({
    reducer:{
        user:userReducer
    }
})