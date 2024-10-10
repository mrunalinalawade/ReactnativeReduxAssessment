
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
   
      const existingItem = state.cartItems.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
   
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload);
   
    },
    clearCart: (state) => {
      state.cartItems = [];
      
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; 
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart , increaseQuantity, decreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;
