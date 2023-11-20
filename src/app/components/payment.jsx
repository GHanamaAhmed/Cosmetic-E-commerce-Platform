import React from 'react'
import ClientINfo from './ClientINfo'
import ProductINfo from './ProductINfo'

export default function Payment() {
  return (
		<div className="w-10/12 grid grid-cols-1 gap-3 md:grid-cols-2">
			<ProductINfo /> 
			<ClientINfo /> 
		</div>
	);
}
