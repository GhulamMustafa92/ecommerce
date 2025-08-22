import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  value: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value = state.value - 1;
        }
    },
    removefromCart: (state, action) => {
     const nextCartItem = state.cart.filter(
        cart => cart.id !==action.payload.id
     )
     state.cart = nextCartItem;
    }
  },
});

export const { addtoCart, increment, decrement, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;
