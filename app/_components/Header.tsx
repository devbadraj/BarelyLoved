import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const MenuOptions = [
{
    label: 'Pricing',
    href: '/pricing',
},

{
    label: 'Contact',
    href: '/contact',
},
]

export const Header = () => {
  return (
    <div className='flex justify-between items-center p-2 sm:p-4 shadow'>
        {/* Logo and title */}
        <div className='flex items-center gap-1 sm:gap-2'>
        <Image src="/BarelyLovedLg.png" alt="logo" width={50} height={50} className='w-8 h-8 sm:w-12 sm:h-12' />
        <h2 className='text-lg sm:text-2xl font-bold text-primary'>BarelyLoved</h2>
        </div>
        {/* Menu options */}
        <div className='hidden md:flex gap-4'>
            {MenuOptions.map((menu,index) => (
                <Button variant='ghost' size='lg' className='text-sm' key={index}>
                    {menu.label}
                </Button>
            ))}
        </div>
        {/* Theme Toggle and Get Started Button */}
        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggle />
            <Button variant='default' size='sm' className='sm:size-lg'>
                <span className='hidden sm:inline'>Get Started</span>
                <ArrowRightIcon className='sm:ml-2' />
            </Button>
        </div>
        
    </div>
  )
}