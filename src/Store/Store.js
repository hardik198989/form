import { configureStore } from '@reduxjs/toolkit'

import CartsliceReducer from '../Cart/Cartslice'

export const store = configureStore({
  reducer: {
    cart: CartsliceReducer
  },


  
})