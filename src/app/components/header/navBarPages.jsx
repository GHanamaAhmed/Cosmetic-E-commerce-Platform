import React from 'react'
import Link from 'next/link'
export default function NavBarPages() {
    return (
        <ul className='flex md:flex-row-reverse justify-between flex-col items-start md:items-center my-4 md:my-0 px-3 md:px-0 w-fit gap-4 md:gap-10'>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href={"/Portfilo/"}>Home</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href={"/Portfilo/about"}>About</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href={"/Portfilo/tech-stack"}>Tech Stack</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href={"/Portfilo/projects"}>Project</Link></li>
            <li className='text-darkContent dark:text-lightContent cursor-pointer'><Link href={"/Portfilo/contact"}>Contact</Link></li>
        </ul>
    )
}
