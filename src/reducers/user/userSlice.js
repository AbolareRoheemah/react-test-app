import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
            // window.localStorage.setItem('userInfo', action.payload)
        },
        clearUserDetails: (state, action) => {
            state.user = action.payload
            // window.localStorage.setItem('userInfo', '')
        }
    }
})

export const { setUserDetails, clearUserDetails } = userSlice.actions

export default userSlice.reducer