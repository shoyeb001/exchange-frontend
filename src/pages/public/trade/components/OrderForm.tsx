import { useState } from 'react';
import { DollarSign, MinusIcon, BarChart2 } from 'lucide-react';

export default function OrderForm() {
    const [activeTab, setActiveTab] = useState('Limit');
    const [side, setSide] = useState('Sell');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState('');


    const orderValue = quantity * (activeTab === 'Market' ? 0 : (parseFloat(price) || 0));

    return (
        <div className="bg-base-background-1 text-gray-300 p-4 max-w-md mx-auto rounded-lg">
            <div className="flex rounded-lg overflow-hidden mb-4">
                <button
                    className={`flex-1 cursor-pointer py-2 ${side === 'Buy' ? 'bg-[#1d2d2d] text-green-text' : 'bg-gray-900 text-gray-400'}`}
                    onClick={() => setSide('Buy')}
                >
                    Buy
                </button>
                <button
                    className={`flex-1 py-2 cursor-pointer ${side === 'Sell' ? 'bg-[#392429] text-red-text' : 'bg-gray-900 text-gray-400'}`}
                    onClick={() => setSide('Sell')}
                >
                    Sell
                </button>
            </div>

            <div className="flex mb-6">
                {['Limit', 'Market'].map((tab) => (
                    <button
                        key={tab}
                        className={`flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-hidden hover:opacity-90 h-[32px] text-high-emphasis px-3 bg-base-background-l2 ${activeTab === tab ? 'text-gray-300 bg-base-background-2' : 'text-gray-500'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex justify-between mb-4">
                <span className="text-gray-400 text-sm">Balance</span>
                <MinusIcon size={16} />
            </div>
            {activeTab !== 'Market' && (
                <>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-sm">Price</span>
                        <span className="text-blue-500 text-sm">Mid</span>
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full bg-gray-900 border border-blue-500 rounded-md py-2 px-3 text-white"
                            placeholder="0"
                        />
                        <div className="absolute right-3 top-2.5">
                            <DollarSign size={20} className="text-blue-400" />
                        </div>
                    </div>
                </>
            )}

            <div className="mb-2">
                <span className="text-gray-400 text-sm">Quantity</span>
            </div>
            <div className="relative mb-4">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-800 rounded-md py-2 px-3 text-white"
                />
                <div className="absolute right-3 top-2.5">
                    <BarChart2 size={20} className="text-teal-400" />
                </div>
            </div>
            {
                activeTab !== 'Market' && (
                    <>
                        <div className="mb-2">
                            <span className="text-gray-400 text-sm">Order Value</span>
                        </div>
                        <div className="relative mb-6">
                            <input
                                type="text"
                                value={activeTab === 'Market' ? 'Market Price' : orderValue.toFixed(2)}
                                readOnly
                                className="w-full bg-gray-800 rounded-md py-2 px-3 text-white"
                            />
                            {activeTab !== 'Market' && (
                                <div className="absolute right-3 top-2.5">
                                    <DollarSign size={20} className="text-blue-400" />
                                </div>
                            )}
                        </div>
                    </>
                )
            }

            <button
                className={`w-full py-3 rounded-md mb-4 ${side === 'Buy' ? 'bg-green-600 text-white' : 'bg-red-800 text-white'}`}
            >
                {side}
            </button>
        </div>
    );
}