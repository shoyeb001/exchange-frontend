import Ticker from "./components/Ticker"
import TradeTab from "./components/TradeTab"
import OrderForm from "./components/OrderForm"
import ChartContainer from "./components/ChartContainer"
const Trade = () => {
    return (
        <div className="flex gap-2">
            <div className="flex-1">
                <Ticker />
                <div className="flex mt-4 gap-2">
                    <div className="bg-base-background-1 flex-1">
                        <ChartContainer />
                    </div>
                    <div className="w-[300px] bg-base-background-1 rounded-md">
                        <TradeTab />
                    </div>
                </div>
            </div>
            <div className="w-[310px]">
                <OrderForm />
            </div>
        </div>
    )
}

export default Trade