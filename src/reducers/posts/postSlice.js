import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmt: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmt } = postSlice.actions

export default postSlice.reducer