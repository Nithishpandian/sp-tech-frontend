import { createSlice } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, editProduct, getProducts } from './productService';


const initialState = {
    products: [],
    status: "idle",
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload; 
            state.status = "idle";
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.status = "failed";
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
            state.status = "idle";
        })
        builder.addCase(editProduct.fulfilled, (state, action) => {
            const index = state.products.findIndex((product) => product._id === action.payload._id);
            state.products[index] = action.payload;
            state.status = "idle";
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const index = state.products.findIndex((product) => product._id === action.payload._id);
            state.products.splice(index, 1);
            state.status = "idle";
        })
    }
})

export const { } = productSlice.actions;
export default productSlice.reducer;
