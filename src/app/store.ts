import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseBinanceApi, baseCoingekoApi } from '../services/api/baseApi';

export const store = configureStore({
    reducer: {
        [baseBinanceApi.reducerPath]: baseBinanceApi.reducer,
        [baseCoingekoApi.reducerPath]: baseCoingekoApi.reducer,
        // Add other reducers here if needed
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseBinanceApi.middleware, baseCoingekoApi.middleware),
});

setupListeners(store.dispatch);
