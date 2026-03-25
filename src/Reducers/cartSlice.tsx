import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        cartItems:[],
        totalAmount: 0,
        itemCount: 0,
    },

    reducers: {
        addToCart: (state, action) => {
          const item = state.cartItems.find((item) => item.id === action.payload.id);
          if (item) {
            item.quantity += 1;
          } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
          }
          state.itemCount += 1;
          state.totalAmount += action.payload.price;
        },
        increment: (state, action) => {
          const item = state.cartItems.find((item) => item.id === action.payload);
          if (item) {
            item.quantity += 1;
            state.itemCount += 1;
            state.totalAmount += item.price;
          }
        },
        decrement: (state, action) => {
          const item = state.cartItems.find((item) => item.id === action.payload);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
            state.itemCount -= 1;
            state.totalAmount -= item.price;
          }
        },
        removeFromCart: (state, action) => {
          const item = state.cartItems.find((item) => item.id === action.payload);
          if (item) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.itemCount -= item.quantity;
            state.totalAmount += item.price * item.quantity;
          }
        },
        checkout:(state) =>{
          state.cartItems = [];
          state.itemCount = 0;
          state.totalAmount = 0;
        },
      },
    });
    
export const { addToCart, increment, decrement, removeFromCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;
