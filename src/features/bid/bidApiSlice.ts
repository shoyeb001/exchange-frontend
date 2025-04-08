import { TDepth } from "@/@types/api/TDepth";
import { baseBinanceApi } from "@/services/api/baseApi";

export const bidsApiSlice = baseBinanceApi.injectEndpoints({
    endpoints: (builder) => ({
        getBids: builder.query<TDepth, { symbol: string }>({
            query: ({ symbol }) => `/depth?symbol=${symbol}`,
            providesTags: ["Bids"]
        })
    })
});

export const { useGetBidsQuery } = bidsApiSlice;