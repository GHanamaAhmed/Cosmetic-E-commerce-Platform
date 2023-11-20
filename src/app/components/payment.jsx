import React from 'react'
import ClientINfo from './ClientINfo'
import ProductINfo from './ProductINfo'

export default function Payment() {
  return (
		<div className="w-10/12 h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-16 mb-10">
			<ProductINfo />
			<ClientINfo />
		</div>
	);
}
