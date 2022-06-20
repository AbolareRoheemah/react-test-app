import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../reducers/posts/postSlice'
import userReducer from '../reducers/user/userSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        user: userReducer
    }
})