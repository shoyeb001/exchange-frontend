import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatLargeNumber } from "@/utils/formatLargeNum"
import { useGetMarketQuery } from "@/features/market/marketApiSlice"
import MarketChart from "./MarketChart"
const CryptoTable = () => {
    const { data, isLoading, isError } = useGetMarketQuery({})
    // const data = [
    //     {
    //         "id": "bitcoin",
    //         "symbol": "btc",
    //         "name": "Bitcoin",
    //         "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    //         "current_price": 83125,
    //         "market_cap": 1650166244756,
    //         "market_cap_rank": 1,
    //         "fully_diluted_valuation": 1650170401905,
    //         "total_volume": 14300103060,
    //         "high_24h": 83854,
    //         "low_24h": 82395,
    //         "price_change_24h": -239.412914765766,
    //         "price_change_percentage_24h": -0.28719,
    //         "market_cap_change_24h": -7433397558.2395,
    //         "market_cap_change_percentage_24h": -0.44844,
    //         "circulating_supply": 19847331,
    //         "total_supply": 19847381,
    //         "max_supply": 21000000,
    //         "ath": 108786,
    //         "ath_change_percentage": -23.57165,
    //         "ath_date": "2025-01-20T09:11:54.494Z",
    //         "atl": 67.81,
    //         "atl_change_percentage": 122513.48791,
    //         "atl_date": "2013-07-06T00:00:00.000Z",
    //         "roi": null,
    //         "last_updated": "2025-04-06T06:42:53.792Z"
    //     },
    //     {
    //         "id": "ethereum",
    //         "symbol": "eth",
    //         "name": "Ethereum",
    //         "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    //         "current_price": 1802.45,
    //         "market_cap": 217551498803,
    //         "market_cap_rank": 2,
    //         "fully_diluted_valuation": 217551498803,
    //         "total_volume": 6943736235,
    //         "high_24h": 1821.42,
    //         "low_24h": 1778.36,
    //         "price_change_24h": -4.06123357542651,
    //         "price_change_percentage_24h": -0.22481,
    //         "market_cap_change_24h": -765342315.718201,
    //         "market_cap_change_percentage_24h": -0.35056,
    //         "circulating_supply": 120672033.708366,
    //         "total_supply": 120672033.708366,
    //         "max_supply": null,
    //         "ath": 4878.26,
    //         "ath_change_percentage": -63.04437,
    //         "ath_date": "2021-11-10T14:24:19.604Z",
    //         "atl": 0.432979,
    //         "atl_change_percentage": 416269.49886,
    //         "atl_date": "2015-10-20T00:00:00.000Z",
    //         "roi": {
    //             "times": 27.9808388547779,
    //             "currency": "btc",
    //             "percentage": 2798.08388547779
    //         },
    //         "last_updated": "2025-04-06T06:42:55.003Z"
    //     },
    //     {
    //         "id": "solana",
    //         "symbol": "sol",
    //         "name": "Solana",
    //         "image": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    //         "current_price": 119.82,
    //         "market_cap": 61746352150,
    //         "market_cap_rank": 6,
    //         "fully_diluted_valuation": 71735164472,
    //         "total_volume": 1845263404,
    //         "high_24h": 121.84,
    //         "low_24h": 117.2,
    //         "price_change_24h": -0.697586426114498,
    //         "price_change_percentage_24h": -0.57884,
    //         "market_cap_change_24h": -451432472.266785,
    //         "market_cap_change_percentage_24h": -0.7258,
    //         "circulating_supply": 514589010.08891,
    //         "total_supply": 597834948.764423,
    //         "max_supply": null,
    //         "ath": 293.31,
    //         "ath_change_percentage": -59.14977,
    //         "ath_date": "2025-01-19T11:15:27.957Z",
    //         "atl": 0.500801,
    //         "atl_change_percentage": 23825.38369,
    //         "atl_date": "2020-05-11T19:35:23.449Z",
    //         "roi": null,
    //         "last_updated": "2025-04-06T06:42:51.162Z"
    //     },
    //     {
    //         "id": "dogecoin",
    //         "symbol": "doge",
    //         "name": "Dogecoin",
    //         "image": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    //         "current_price": 0.166787,
    //         "market_cap": 24806792694,
    //         "market_cap_rank": 8,
    //         "fully_diluted_valuation": 24812389558,
    //         "total_volume": 613084839,
    //         "high_24h": 0.170396,
    //         "low_24h": 0.166499,
    //         "price_change_24h": -0.00156498400046248,
    //         "price_change_percentage_24h": -0.92959,
    //         "market_cap_change_24h": -293934106.42664,
    //         "market_cap_change_percentage_24h": -1.17102,
    //         "circulating_supply": 148702566383.705,
    //         "total_supply": 148736116383.705,
    //         "max_supply": null,
    //         "ath": 0.731578,
    //         "ath_change_percentage": -77.19703,
    //         "ath_date": "2021-05-08T05:08:23.458Z",
    //         "atl": 0.0000869,
    //         "atl_change_percentage": 191861.26357,
    //         "atl_date": "2015-05-06T00:00:00.000Z",
    //         "roi": null,
    //         "last_updated": "2025-04-06T06:42:54.155Z"
    //     }
    // ]
    return (
        <div className="flex flex-col bg-base-background-1 flex-1 gap-3 rounded-xl p-4 mt-5">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-base-color">Name</TableHead>
                        <TableHead className="text-right text-base-color">Price</TableHead>
                        <TableHead className="text-right text-base-color">24h Volume</TableHead>
                        <TableHead className="text-right text-base-color">Market Cap</TableHead>
                        <TableHead className="text-right text-base-color">24h Change</TableHead>
                        <TableHead className="text-right text-base-color">Last 7 Days</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((coin: any) => (
                            <TableRow>
                                <TableCell className="text-sm px-2 py-3">
                                    <div className="flex shrink">
                                        <div className="flex items-center">
                                            <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                                            <div className="flex flex-col">
                                                <span className="text-white font-semibold">{coin.name}</span>
                                                <span className="text-sm text-base-color">{coin.symbol.toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-white text-right">${coin.current_price}</TableCell>
                                <TableCell className="text-white text-right">{coin.circulating_supply}</TableCell>
                                <TableCell className="text-white text-right">${formatLargeNumber(coin.market_cap)}</TableCell>
                                <TableCell className="text-red-text text-right">{coin.price_change_percentage_24h}%</TableCell>
                                <TableCell className="flex align-center justify-end">
                                    <MarketChart prices={coin.sparkline_in_7d.price} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>

    )
}

export default CryptoTable