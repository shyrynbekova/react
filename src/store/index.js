import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { orderApi} from '/src/api/post.js';

export const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (orderDefaultMiddleware) =>
    orderDefaultMiddleware().concat(orderApi.middleware),
})
setupListeners(store.dispatch)
