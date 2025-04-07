import { baseCoingekoApi } from "@/services/api/baseApi";

export const marketApiSlice = baseCoingekoApi.injectEndpoints({
    endpoints: (builder) => ({
        getMarket: builder.query({
            query: () => '/coins/markets?vs_currency=usd&per_page=20&page=1&sparkline=true',
        }),
    })
});

export const { useGetMarketQuery } = marketApiSlice;