
const Asks = ({ asks }: { asks: Array<string[]> }) => {
    const currentAsks = asks.slice(0, 15)
    currentAsks.reverse();
    const maxAskSize = Math.max(
        ...(currentAsks?.map(ask => parseFloat(ask[1])) || [0])
    );
    let askswithTotal: [string, string, number][] = [];
    if (asks && currentAsks) {
        let currentAsksTotal = 0;
        for (let i = currentAsks.length - 1; i >= 0; i--) {
            const [price, size] = currentAsks[i]
            askswithTotal.push([price, size, currentAsksTotal += Number(size)])
        }
    }
    askswithTotal.reverse();
    return (
        <div>
            {asks && askswithTotal && askswithTotal.map((ask, index) => {
                const price = parseFloat(ask[0]);
                const size = parseFloat(ask[1]);
                const total = ask[2];
                return (
                    <div key={`ask-${index}`} className="mb-px relative">
                        <div
                            className="absolute top-0 right-0 h-full bg-red-900/40"
                            style={{ width: `${(size / maxAskSize) * 100}%` }}
                        />
                        <div className="grid grid-cols-3 relative z-10">
                            <div className="text-red-text text-sm">{price.toFixed(2)}</div>
                            <div className="text-center text-sm">{size.toFixed(2)}</div>
                            <div className="text-right text-sm">{total.toFixed(2)}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Asks