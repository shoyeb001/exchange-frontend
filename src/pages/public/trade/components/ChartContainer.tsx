import CandelChart from './CandelChart'

const ChartContainer = () => {
    return (
        <div className='w-full bg-base-background-1 rounded-md h-[500px]'>
            <div className='p-3 w-full h-full'>
                <CandelChart />
            </div>
        </div>
    )
}

export default ChartContainer