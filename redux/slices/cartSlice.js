import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item.id === action.payload.id)
      itemExists ? itemExists.quantity++ : state.push({ ...action.payload, quantity: 1 })
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload)
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload)
      if (item.quantity === 1) {
        const itemIndex = state.findIndex(item => item.id === action.payload)
        state.splice(itemIndex, 1)
      } else {
        item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload)
      state.splice(itemIndex, 1)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const selectCart = state => state.cart
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions
