import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "ProductSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const resToJson = await res.json();
    return resToJson;
  }
);

const ProductSlice = createSlice({
  initialState: [],
  name: "ProductSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
