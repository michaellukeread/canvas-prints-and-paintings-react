import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGetJSON } from 'utils'
import centsToDollars from 'utils/centsToDollars'

const initialState = {
  data: [],
  pending: false,
  error: false
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const productsResponse = await fetchGetJSON('/api/products')
  const pricesResponse = await fetchGetJSON('/api/prices')

  const mergedItems = productsResponse.data
    .filter(a => pricesResponse.data.some(b => a.id === b.product))
    .map(item => ({ ...pricesResponse.data.find(elem => item.id === elem.product), ...item }))

  const swapIds = mergedItems.map(item => ({
    ...item,
    frameOptions: item.metadata.frameOptions.toLowerCase().replace(' ', '').split(',') || null,
    orientation: item.metadata.orientation || null,
    price_id: item.id,
    id: item.product,
    dollarAmount: centsToDollars(item.unit_amount)
  }))

  return swapIds
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        console.debug('payload', payload)
        state.pending = false
        state.data = payload
      })
      .addCase(getProducts.rejected, state => {
        state.pending = false
        state.error = true
      })
  }
})

export const selectProducts = state => state.products.data
export const productReducer = productSlice.reducer
