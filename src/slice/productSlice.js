import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
      
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value -= 1
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = productSlice.actions

export default productSlice.reducer