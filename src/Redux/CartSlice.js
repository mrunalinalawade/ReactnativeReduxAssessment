
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
      console.log('Reducer addToCart called with:', item);
      const existingItem = state.cartItems.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      console.log('Updated cartItems:', state.cartItems); 
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload);
      console.log('Reducer removeFromCart called with:', action.payload);
      console.log('Updated cartItems:', state.cartItems); 
    },
    clearCart: (state) => {
      state.cartItems = [];
      console.log('Reducer clearCart called. cartItems cleared.'); 
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
