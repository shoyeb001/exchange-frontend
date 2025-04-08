import { convertTimestamp } from "@/utils/convertTimestamp"
import { useState } from "react"

const Trades = () => {
    const [trades, setTrades] = useState([
        {
            "id": 348104524,
            "isBuyerMaker": true,
            "price": "106.13",
            "quantity": "1.34",
            "quoteQuantity": "142.2142",
            "timestamp": 1744046963819
        },
        {
            "id": 348104523,
            "isBuyerMaker": true,
            "price": "106.13",
            "quantity": "0.12",
            "quoteQuantity": "12.7356",
            "timestamp": 1744046963819
        },
        {
            "id": 348104522,
            "isBuyerMaker": true,
            "price": "106.14",
            "quantity": "0.17",
            "quoteQuantity": "18.0438",
            "timestamp": 1744046963819
        },
        {
            "id": 348104521,
            "isBuyerMaker": true,
            "price": "106.14",
            "quantity": "0.55",
            "quoteQuantity": "58.377",
            "timestamp": 1744046963819
        },
        {
            "id": 348104520,
            "isBuyerMaker": true,
            "price": "106.15",
            "quantity": "0.04",
            "quoteQuantity": "4.246",
            "timestamp": 1744046963819
        },
        {
            "id": 348104519,
            "isBuyerMaker": true,
            "price": "106.15",
            "quantity": "0.23",
            "quoteQuantity": "24.4145",
            "timestamp": 1744046963819
        },
        {
            "id": 348104518,
            "isBuyerMaker": true,
            "price": "106.15",
            "quantity": "0.55",
            "quoteQuantity": "58.3825",
            "timestamp": 1744046963819
        },
        {
            "id": 348104517,
            "isBuyerMaker": true,
            "price": "106.16",
            "quantity": "0.04",
            "quoteQuantity": "4.2464",
            "timestamp": 1744046963819
        },
        {
            "id": 348104516,
            "isBuyerMaker": true,
            "price": "106.17",
            "quantity": "0.47",
            "quoteQuantity": "49.8999",
            "timestamp": 1744046963819
        },
        {
            "id": 348104515,
            "isBuyerMaker": true,
            "price": "106.17",
            "quantity": "0.46",
            "quoteQuantity": "48.8382",
            "timestamp": 1744046962615
        },
    ])
    return (
        <div className=" text-white font-mono p-2 w-full max-w-md">
            <div className="grid grid-cols-3 text-gray-400 text-sm mb-1">
                <div className='text-sm'>Price (USDC)</div>
                <div className="text-center text-sm">Size (SOL)</div>
            </div>
            <div>
                {
                    trades.map((trade, index) => (
                        <div key={`ask-${index}`} className="mb-px relative">
                            <div className="grid grid-cols-3 relative z-10">
                                <div className="text-red-text text-sm">{trade.price}</div>
                                <div className="text-center text-sm">{trade.quantity}</div>
                                <div className="text-right text-sm">{convertTimestamp(trade.timestamp)}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Trades