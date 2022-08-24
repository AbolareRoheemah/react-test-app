import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import postReducer from '../reducers/posts/postSlice'
import userReducer from '../reducers/user/userSlice'


// const authMiddleware = (store) => (next) => (action) => {
//     const result = next(action);
//     if ( action.type?.startsWith('user/') ) {
//         const userState = store.getState().user;
//         localStorage.setItem('userInfo', JSON.stringify(userState))
//     }
//     return result;
// }
const persistConfig = {
    key: 'root',
    storage,
}

const allReducers = combineReducers({
    posts: postReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
})