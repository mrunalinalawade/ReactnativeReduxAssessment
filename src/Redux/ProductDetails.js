import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    AllProductData_: [],
};
const ProductDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
     
        saveAllProductData: (state, action) => {
            state.AllProductData_ = action.payload;
        },
    
    },
});
export const {saveAllProductData } = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer;
