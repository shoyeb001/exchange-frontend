const Bids = ({ bids }: { bids: Array<string[]> }) => {
    const currentBids = bids.slice(0, 15);
    currentBids.reverse();
    const maxBidSize = Math.max(
        ...(currentBids?.map(bid => parseFloat(bid[1])) || [0])
    );
    let bidsWithTotal: [string, string, number][] = [];
    if (bids && currentBids) {
        let currentBidTotal = 0;
        for (let i = currentBids.length - 1; i >= 0; i--) {
            const [price, size] = currentBids[i];
            bidsWithTotal.push([price, size, currentBidTotal += Number(size)]);
        }
    }
    return (
        <div>
            {bidsWithTotal.map((bid, index) => {
                const price = parseFloat(bid[0]);
                const size = parseFloat(bid[1]);
                const total = bid[2];
                return (
                    <div key={`bid-${index}`} className="mb-px relative">
                        <div
                            className="absolute top-0 right-0 h-full bg-green-900/40"
                            style={{ width: `${(size / maxBidSize) * 100}%` }}
                        />
                        <div className="grid grid-cols-3 relative z-10">
                            <div className="text-green-text text-sm">{price.toFixed(2)}</div>
                            <div className="text-center text-sm">{size.toFixed(2)}</div>
                            <div className="text-right text-sm">{total.toFixed(2)}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Bids