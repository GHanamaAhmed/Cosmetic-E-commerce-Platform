import React from 'react'
import Link from 'next/link'
export default function NavBarPages() {
    return (
        <ul className='flex justify-between md:flex-row flex-col items-start md:items-center my-4 md:my-0 px-3 md:px-0 w-fit gap-4 md:gap-10'>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href="/">Home</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href="/user">user</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href="/checkout">checkout</Link></li>
        </ul>
    )
}
