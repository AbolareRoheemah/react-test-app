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
        },
        clearUserDetails: (state) => {
            state.user = {}
        }
    }
})

export const { setUserDetails, clearUserDetails } = userSlice.actions

export default userSlice.reducer