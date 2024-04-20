import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../hooks/orderReducer'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todoApi } from '../api/todos'

export const store = configureStore({
  reducer: {
    order: orderReducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})
setupListeners(store.dispatch)