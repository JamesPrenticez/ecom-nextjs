import { createSlice } from '@reduxjs/toolkit';
import { ICart } from '../../models/cart';

export interface ICartState {
  data: ICart;
}

const initialState: ICartState = {
  data: {
    userId: "",
    cartItems: []
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // logic to add an item
    },
    removeItem: (state, action) => {
      // logic to remove an item
    },
    updateQuantity: (state, action) => {
      // logic to update quantity
    },
    // Other reducers...
  },
});

export const { 
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
