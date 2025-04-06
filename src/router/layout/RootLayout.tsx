import { Search } from 'lucide-react'
import Logo from "/logo.png"
import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <>
            <header className='sticky top-0 z-10 bg-base-background-10'>
                <div className='flex items-center px-4 py-2 h-full justify-between'>
                    <a href='/'>
                        <div className='flex items-center h-[24px] gap-3'>
                            <img src={Logo} alt="logo" className='w-[30px] h-[30px]' />
                            <p className='text-white text-lg font-bold'>Exchange</p>
                        </div>
                    </a>
                    <div className='inline-flex justify-self-center'>
                        <div className='flex items-center justify-between bg-base-background-2 cursor-pointer overflow-hidden rounded-md focus-within:border-red w-80'>
                            <div className='flex items-center px-1 py-1'>
                                <Search className='text-base-icon w-4 h-4 ml-2' />
                                <input type="text" placeholder='Search market' className='bg-base-background-2 text-base-background-10 outline-none px-2 py-1 text-[##f4f4f6] text-high-emphasis h-8 border-0 ' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Button size={"sm"} className='text-green-text bg-green-text cursor-pointer'>Sign in</Button>
                        <Button size={"sm"} className='bg-[#182639] text-ancent-text cursor-pointer'>Sign up</Button>
                    </div>
                </div>
            </header>
            <main className='bg-base-background-10 min-h-screen'>
                <div className='px-4'>
                    <div className='pt-3'>
                        <Outlet />

                    </div>
                </div>
            </main>
        </>

    )
}

export default RootLayout