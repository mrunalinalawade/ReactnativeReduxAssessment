import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    AllProductData_: [],
    Token_: '',
    selectedCategory: null,
};
const ProductDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {

        saveAllProductData: (state, action) => {
            state.AllProductData_ = action.payload;
        },
        saveToken: (state, action) => {
            state.Token_ = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        clearSelectedCategory: (state) => {
            state.selectedCategory = null;
        },

    },
});
export const { saveAllProductData, saveToken, setSelectedCategory, clearSelectedCategory } = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer;
