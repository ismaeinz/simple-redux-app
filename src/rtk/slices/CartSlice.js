import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      // state.push(action.payload);
      const findItem = state.find(
        (product) => product.id === action.payload.id
      );
      if (findItem) {
        //
        findItem.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeFromCart: (state, action) => {
      // remove Item
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, clear } = CartSlice.actions;
export default CartSlice.reducer;
