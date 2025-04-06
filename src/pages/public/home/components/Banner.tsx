import { Button } from '@/components/ui/button'
import BannerImg from '/home/banner.webp'
const Banner = () => {
    return (
        <div className='relative w-full h-96 bg-black'>
            <img src={BannerImg} alt="Banner" className='w-full h-full object-cover' />
            <div className='absolute top-0 left0 w-full h-full bg-transparent '>
                <div className='px-10 py-53 flex flex-col align-center'>
                    <h3 className='text-4xl font-bold text-white'>Got USDT?</h3>
                    <p className='text-lg  mt-2'>The AAVE, ENA, ARB, KAITO, FARTCOIN, ONDO, and DOT perp markets are live.</p>
                    <Button size={"lg"} className='w-[150px] mt-2 bg-white text-black'>View Markets</Button>
                </div>

            </div>
        </div>
    )
}

export default Banner