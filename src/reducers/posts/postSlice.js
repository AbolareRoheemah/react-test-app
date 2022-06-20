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


// const postReducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + action.payload
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }
// export default postReducer;