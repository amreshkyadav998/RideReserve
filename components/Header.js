import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const HeaderMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: '/taxi.jpeg'
        },
        {
            id: 2,
            name: 'Reserve',
            icon: '/box.jpeg'
        },
        {
            id: 2,
            name: 'About',
            icon: '/about.png'
        }
    ]

    return (
        <div className='p-4 pb-3 pl-3 border-b-[4px] border-gray-200 flex items-center justify-between'>
            <div className='flex gap-24 items-center'>
                <Image src='/logo2.png' width={120} height={150} alt='Logo' />
                <div className='flex gap-6 items-center'>
                    {HeaderMenu.map((item) => (
                        <div className='flex gap-2 items-center' key={item.id}>
                            <Image src={item.icon} width={17} height={17}/>
                            <h2 className='text-[14px] font-medium'>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <UserButton/>
        </div>
    )
}

export default Header
