import { Button } from "@/components/ui/button"

const Ticker = () => {
    return (
        <div className='w-full h-20 bg-base-background-1 rounded-md flex gap-6 items-center'>
            <div className="p-2 flex gap-2 items-center">
                {/* <div className="bg-base-background-2 rounded-xl">
                    <h2><span>Sol</span>/USDC</h2>
                </div> */}
                <Button className="bg-base-background-2 text-base-color"><span className="text-white">SOL</span>/ USDC</Button>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-red-text font-medium text-lg">107.40</p>
                <p className="font-normal text-sm text-white">$107.40</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-base-color text-sm">24H Change</p>
                <p className="text-red-text"> -7.75  -6.75</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-base-color text-sm">24H High</p>
                <p className="text-white"> 115.36</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-base-color text-sm">24H Low</p>
                <p className="text-white"> 90.36</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-base-color text-sm">24H Volume(SOL)</p>
                <p className="text-white"> 588,572.84</p>
            </div>
        </div>
    )
}

export default Ticker