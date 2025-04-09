import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseCoingekoApi = createApi({
    reducerPath: 'coingeckoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    tagTypes: [],
    endpoints: () => ({}),
});

export const baseBinanceApi = createApi({
    reducerPath: 'binanceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api4.binance.com/api/v1',
    }),

    tagTypes: ["Bids", "Trades", "Tickers"],
    endpoints: () => ({}),
});