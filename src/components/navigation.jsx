import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/logo.webp';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { navbarMenu } from '@/common/menu';

function Navigation() {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Navbar fluid className="!bg-white !p-0 !px-0">
            <div className="flex items-center justify-between w-full">
                <NavbarBrand as={Link} href="/">
                    <Image 
                        src={logo} 
                        width={400} 
                        height={400} 
                        className="w-[118.444px] h-auto" 
                        alt="Logo" 
                    />
                </NavbarBrand>

                <div className="flex items-center gap-6">
                    <NavbarCollapse className="hidden md:flex items-center gap-4">
                        {navbarMenu.map((item, index) => (
                            <NavbarLink 
                                key={index} 
                                href={item.href} 
                                className={router.pathname === item.href ? '!text-[#1767B2]' : '!text-[#000000] hover:!text-[#1767B2]'}
                            >
                                {item.name}
                            </NavbarLink>
                        ))}
                    </NavbarCollapse>

                    <button onClick={() => setOpen(!isOpen)} >
                        <Icon
                            icon="jam:menu"
                            width={32}
                            height={32}
                            className={`${isOpen ? "rotate-90" : ""} transition-transform duration-300 hover:!text-[#1767B2]`}
                        />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="w-full p-4 block items-center md:hidden gap-2 mt-3 bg-blue-50 rounded-lg">
                    {navbarMenu.map((item, index) => (
                        <div key={index} className={router.pathname === item.href ? '!text-[#1767B2] py-2' : '!text-[#000000] hover:!text-[#1767B2] py-2'}>
                            <Link href={item.href}>
                                <div className='flex items-center gap-2'>
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </Navbar>
    );
}

export default Navigation;
