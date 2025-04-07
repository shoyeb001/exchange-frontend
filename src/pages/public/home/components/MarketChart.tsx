import { LineChart, Line, ResponsiveContainer } from 'recharts';

const MarketChart = ({ prices }: { prices: number[] }) => {
    const priceChange = prices[prices.length - 1] - prices[0];
    const first = prices[0];

    const stroke = priceChange > 0 ? '#229b74' : '#e05b5a';
    const formattedData = prices.map((price, index) => ({
        time: index,
        price: ((price - first) / first) * 100, 
    }));

    return (
        <div style={{ width: '100px', height: '60px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formattedData} >
                    <Line
                        type="monotone"
                        dataKey="price"
                        strokeWidth={2}
                        stroke={stroke}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MarketChart