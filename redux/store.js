import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './slices/cartSlice'
import { productReducer, getProducts } from './slices/productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
})

store.dispatch(getProducts())

export default store
