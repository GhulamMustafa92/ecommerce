import { configureStore } from '@reduxjs/toolkit'
import  addtoCart  from './createSlice';
const store = configureStore({
  reducer: {
    cart: addtoCart,
    
  },
})

export default store;