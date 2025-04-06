import { baseCoingekoApi } from "@/services/api/baseApi";

export const marketApiSlice = baseCoingekoApi.injectEndpoints({
    endpoints: (builder) => ({
        getMarket: builder.query({
            query: () => '/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin',
        }),
    })
});

export const { useGetMarketQuery } = marketApiSlice;