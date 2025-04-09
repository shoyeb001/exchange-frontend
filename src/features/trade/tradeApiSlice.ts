import { TTrades } from "@/@types/api/TTrades";
import { baseBinanceApi } from "@/services/api/baseApi";

export const tradesApiSlice = baseBinanceApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrades: builder.query<TTrades[], { symbol: string }>({
            query: ({ symbol }) => `/trades?symbol=${symbol}`,
            providesTags: ["Trades"]
        })
    })
});
export const { useGetTradesQuery } = tradesApiSlice;