import { TTickers } from "@/@types/api/TTickers";
import { baseBinanceApi } from "@/services/api/baseApi";

export const tickerApiSlice = baseBinanceApi.injectEndpoints({
    endpoints: (builder) => ({
        getTickers: builder.query<TTickers[], void>({
            query: () => '/ticker/24hr',
            providesTags: ["Tickers"]
        })
    })
});
export const { useGetTickersQuery } = tickerApiSlice