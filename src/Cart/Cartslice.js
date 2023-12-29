import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart: [],
  quantify: 0,
  cartTotal:0,
  discount:0,
  total:0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if(find >= 0){
        state.cart[find].quantify =+ 1;
      }
      else{
        state.cart.push(action.payload)
      }
      state.cartTotal += action.payload.price;
      state.discount += action.payload.discountPercentage;
      state.total = state.cartTotal - state.discount
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = CartSlice.actions

export default CartSlice.reducer