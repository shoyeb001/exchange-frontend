import { convertTimestamp } from "@/utils/convertTimestamp"
import { useGetTradesQuery } from "@/features/trade/tradeApiSlice"

const Trades = () => {
    const { data: trades, isLoading } = useGetTradesQuery({
        symbol: "SOLUSDC"
    });
    return (
        <div className=" text-white font-mono p-2 w-full max-w-md h-[500px] overflow-y-scroll">
            <div className="grid grid-cols-3 text-gray-400 text-sm mb-1">
                <div className='text-sm'>Price (USDC)</div>
                <div className="text-center text-sm">Size (SOL)</div>
            </div>
            {
                trades && (
                    <>
                        {
                            trades.map((trade, index) => (
                                <div key={`ask-${index}`} className="mb-px relative">
                                    <div className="grid grid-cols-3 relative z-10">
                                        <div className={`${trade.isBuyerMaker ? 'text-red-text' : 'text-green-text'} text-sm`}>{parseFloat(trade.price).toFixed(2)}</div>
                                        <div className="text-center text-sm">{parseFloat(trade.qty).toFixed(2)}</div>
                                        <div className="text-right text-sm">{convertTimestamp(trade.time)}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }
            <div>
            </div>
        </div>
    )
}

export default Trades