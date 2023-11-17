'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
export default function page() {
    const route = usePathname() 
     const product = route.replace('/products/','')
  return (
    <div>page {product}</div>
  )
}
