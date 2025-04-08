import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TradeCard from './TradeCard'
import Trades from './Trades'

const TradeTab = () => {
    return (
        <Tabs defaultValue="account" className="w-full py-3 px-2">
            <TabsList className="flex gap-3 bg-base-background-1">
                <TabsTrigger value="account" className='flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-hidden hover:opacity-90 h-[32px] text-high-emphasis px-3 bg-base-background-l2'>Book</TabsTrigger>
                <TabsTrigger value="password" className='flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-hidden hover:opacity-90 h-[32px] text-high-emphasis px-3 bg-base-background-l2'> Trades</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className='bg-base-background-1'>
                <div className='w-full'>
                    <TradeCard />
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className='w-full'>
                    <Trades />
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default TradeTab