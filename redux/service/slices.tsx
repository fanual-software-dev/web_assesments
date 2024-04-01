import { createSlice } from "@reduxjs/toolkit";

export const Slices = createSlice({
    name: "Slice",
    initialState:{value:0},
    reducers:{
        increment:(state) => {
            state.value+=1
        },

        decrement:(state) => {
            state.value-=1
        }

    }
})

export const {increment,decrement} = Slices.actions;
export default Slices.reducer;