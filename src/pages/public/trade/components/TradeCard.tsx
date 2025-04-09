import { useGetBidsQuery } from '@/features/bid/bidApiSlice';
import { useEffect, useState } from 'react'
import Asks from './Asks';
import Bids from './Bids';
import useTicker from '@/hooks/useTicker';
import { TTickers } from '@/@types/api/TTickers';
const TradeCard = () => {
    const [asks, setAsks] = useState<[string, string][]>([]);
    const [bids, setBids] = useState<[string, string][]>([]);
    const [ticker, setTicker] = useState<TTickers>();
    const { getTicker, isSuccess } = useTicker();
    const { data, isLoading } = useGetBidsQuery({
        symbol: "SOLUSDC"
    });
    const [currentPrice, setCurrentPrice] = useState(105.89);
    const getTextColor = (value: string) => {
        return parseFloat(value) < 0 ? 'text-red-text' : 'text-green-text'
    }


    useEffect(() => {
        if (data?.asks && data?.bids) {
            setAsks(data.asks);
            setBids(data?.bids);
        }
        const tickerData = getTicker("SOLUSDC");
        setTicker(tickerData);
    }, [data, isSuccess])

    return (
        <div className=" text-white font-mono p-2 w-full max-w-md">
            <div className="grid grid-cols-3 text-gray-400 text-sm mb-1">
                <div className='text-sm'>Price (USDC)</div>
                <div className="text-center text-sm">Size (SOL)</div>
                <div className="text-right text-sm">Total (SOL)</div>
            </div>
            <Asks asks={asks} />
            <div className="py-1">
                {
                    ticker && (
                        <div className={`${getTextColor(ticker.priceChange)} text-lg font-medium`}>{parseFloat(ticker?.lastPrice).toFixed(2)}</div>
                    )
                }

            </div>
            <Bids bids={bids} />
        </div>
    )
}

export default TradeCard