import { useGetBidsQuery } from '@/features/bid/bidApiSlice';
import { useEffect, useState } from 'react'

const TradeCard = () => {
    const [asks, setAsks] = useState<string[][]>([]);
    const [bids, setBids] = useState<string[][]>([]);
    // const [askswithTotal, setAsksWithTotal] = useState<string[][]>([]);
    const { data, isLoading, isError } = useGetBidsQuery({
        symbol: "SOLUSDC"
    });
    const [currentPrice, setCurrentPrice] = useState(105.89);

    useEffect(() => {
        if (data?.asks && data?.bids) {
            setAsks(data.asks.slice(0, 15));
            setBids(data.bids.slice(0, 15))
        }
    }, [data])

    const maxAskSize = Math.max(
        ...(data?.asks?.map(ask => parseFloat(ask[1])) || [0])
    );

    const maxBidSize = Math.max(
        ...(bids?.map(bid => parseFloat(bid[1])) || [0])
    );

    // let askswithTotal: [string, string, number][] = [];
    // let currentAsksTotal = 0;
    // for (let i = asks.length; i > 0; i--) {
    //     const [price, size] = asks[i]
    //     askswithTotal.push([price, size, parseFloat(currentAsksTotal + size)])
    //     console.log(askswithTotal)
    // }

    return (
        <div className=" text-white font-mono p-2 w-full max-w-md">
            <div className="grid grid-cols-3 text-gray-400 text-sm mb-1">
                <div className='text-sm'>Price (USDC)</div>
                <div className="text-center text-sm">Size (SOL)</div>
                <div className="text-right text-sm">Total (SOL)</div>
            </div>
            <div>
                {asks.map((ask, index) => {
                    const price = parseFloat(ask[0]);
                    const size = parseFloat(ask[1]);
                    // const total = ask[2];
                    return (
                        <div key={`ask-${index}`} className="mb-px relative">
                            <div
                                className="absolute top-0 right-0 h-full bg-red-900/40"
                                style={{ width: `${(size / maxAskSize) * 100}%` }}
                            />
                            <div className="grid grid-cols-3 relative z-10">
                                <div className="text-red-text text-sm">{price.toFixed(2)}</div>
                                <div className="text-center text-sm">{size.toFixed(2)}</div>
                                {/* <div className="text-right text-sm">{total.toFixed(2)}</div> */}
                            </div>
                        </div>
                    )

                })}
            </div>

            <div className="py-1">
                <div className="text-red-text text-lg font-medium">{currentPrice.toFixed(2)}</div>
            </div>

            <div>
                {bids.map((bid, index) => {
                    const price = parseFloat(bid[0]);
                    const size = parseFloat(bid[1])
                    return (
                        <div key={`bid-${index}`} className="mb-px relative">
                            <div
                                className="absolute top-0 right-0 h-full bg-green-900/40"
                                style={{ width: `${(size / maxBidSize) * 100}%` }}
                            />
                            <div className="grid grid-cols-3 relative z-10">
                                <div className="text-green-text text-sm">{price.toFixed(2)}</div>
                                <div className="text-center text-sm">{size.toFixed(2)}</div>
                                {/* <div className="text-right text-sm">{bid.total.toFixed(2)}</div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TradeCard