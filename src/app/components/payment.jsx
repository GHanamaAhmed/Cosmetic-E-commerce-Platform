import React from 'react'
import ClientINfo from './ClientINfo'
import ProductINfo from './ProductINfo'

export default function Payment() {
  return (
		<div className="w-10/12 h-full flex flex-row justify-between items-center gap-16">
			<ProductINfo />
			<ClientINfo />
		</div>
	);
}
