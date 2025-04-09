import { TTickers } from "@/@types/api/TTickers";
import { Button } from "@/components/ui/button"
import useTicker from "@/hooks/useTicker"
import { useEffect, useState } from "react";
const Ticker = () => {
    const [ticker, setTicker] = useState<TTickers>();
    const { getTicker, isSuccess } = useTicker();
    useEffect(() => {
        const data = getTicker("SOLUSDC")
        setTicker(data);
    }, [isSuccess])
    const getTextColor = (value: string) => {
        return parseFloat(value) < 0 ? 'text-red-text' : 'text-green-text'
    }
    return (
        <div className='w-full h-20 bg-base-background-1 rounded-md flex gap-6 items-center'>
            {
                isSuccess && ticker && (
                    <>
                        <div className="p-2 flex gap-2 items-center">

                            <Button className="bg-base-background-2 text-base-color"><span className="text-white">SOL</span>/ USDC</Button>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className={`${getTextColor(ticker.priceChange)} font-medium text-lg`}>{parseFloat(ticker.lastPrice).toFixed(2)}</p>
                            <p className="font-normal text-sm text-white">${parseFloat(ticker.lastPrice).toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-color text-sm">24H Change</p>
                            <p className={`${getTextColor(ticker.priceChange)}`}> {parseFloat(ticker.priceChange).toFixed(2)}  {parseFloat(ticker.priceChangePercent).toFixed(2)}%</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-color text-sm">24H High</p>
                            <p className="text-white">{parseFloat(ticker.highPrice).toFixed(2)} </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-color text-sm">24H Low</p>
                            <p className="text-white"> {parseFloat(ticker.lowPrice).toFixed(2)} </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-color text-sm">24H Volume(SOL)</p>
                            <p className="text-white"> {parseFloat(ticker.volume).toFixed(2)} </p>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Ticker