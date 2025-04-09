import { useGetTickersQuery } from "@/features/tickers/tickerApiSlice"

const useTicker = () => {
    const { data: tickers, isLoading, isSuccess, isError } = useGetTickersQuery();
    const getTicker = (symbol: string) => {
        const ticker = tickers?.find((t) => t?.symbol === symbol);
        return ticker;
    }

    return {
        tickers,
        isLoading,
        isSuccess,
        isError,
        getTicker
    }
}

export default useTicker