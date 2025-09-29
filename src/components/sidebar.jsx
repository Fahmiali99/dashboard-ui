import { sidebarMenu } from '@/common/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Sidebar() {
    const router = useRouter();

    return (
        <div className="flex justify-center md:flex-col space-y-1 py-1.5 md:py-3.5">
            {sidebarMenu.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className="w-full flex md:h-11 md:w-11 items-center justify-center rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 "
                >
                    <div className={router.pathname === item.href 
                        ? 'text-white bg-[#88C6FF66]/40 hover:text-white shadow-lg shadow-[#00000040]/25 w-10 h-10 md:w-0 md:h-0 flex items-center justify-center rounded-full' 
                        : 'text-white hover:text-white'}>
                        <div className="text-[18px] md:text-[22.73px] h-auto">{item.icon}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Sidebar
