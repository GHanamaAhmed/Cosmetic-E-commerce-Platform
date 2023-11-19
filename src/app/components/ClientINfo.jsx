import React from 'react'

export default function ClientINfo() {
  return (
		<div className="flex flex-col w-full h-full px-18 gap-10">
			<div className="w-full h-full flex  justify-between gap-2 ">
				<input
					type="text"
					placeholder="الاسم"
					className="border-2 w-2/5 border-orange-500 focus:outline-blue-500 rounded-md border-spacing-2 p-1"
				/>
				<input
					type="text"
					className="border-2 w-2/5 border-orange-500 focus:outline-blue-500 rounded-md p-1"
					placeholder="اللقب"
				/>
			</div>
			<input
				type="tel"
				placeholder="رقم الهاتف"
				className="border-2 border-orange-500 focus:outline-blue-500 rounded-md border-spacing-2 p-1"
			/>
			<input
				type="email"
				placeholder="الايميل "
				className="border-2 border-orange-500 focus:outline-blue-500 rounded-md border-spacing-2 p-1"
			/>
			<select
				name="wilaya"
				id="wilaya"
				placeholder="الولاية"
				className="border-2 border-orange-500 focus:outline-blue-500 rounded-md border-spacing-2 p-1 text-lightContent"
			>
				<option value="" disabled selected hidden>
					الولاية
				</option>
				<option value="adrar" > ادرار</option>
				<option value="algiers">الجزائر</option>
				<option value="oran"> وهران</option>
			</select>

			<select
				name="wilaya"
				id="wilaya"
				className="border-2 border-orange-500 focus:outline-blue-500 rounded-md border-spacing-2 p-1 text-lightContent"
			>
				<option value="" disabled selected className="bg-lightContent">
					البلدية
				</option>
				<option value="adrar"> ادرار</option>
				<option value="algiers">الجزائر</option>
				<option value="oran"> وهران</option>
				<option value="null"> </option>
			</select>
		</div>
	);
}
