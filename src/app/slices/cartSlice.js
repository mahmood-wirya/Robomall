import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updatecart: (state, action) => {
      
      state.products = action.payload;
   
    },
  },
});

export const { updatecart } = cartSlice.actions;

export default cartSlice.reducer;
