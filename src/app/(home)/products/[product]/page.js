'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
export default function page() {
    const route = usePathname() 
     const product = route.replace('/products/','')
  return (
    <div className='flex flex-col justify-center items-center text-center'>page {product}</div>
  )
}
