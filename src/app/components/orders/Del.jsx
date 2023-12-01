import React from 'react'

export default function Del() {
  return (
		<div className="w-full h-full flex flex-col items-end  justify-evenly gap-5  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg m-2">
			<p className=" text-lg text-slate-700 font-semibold"> deleviry</p>
			<div className="w-full flex flex-row-reverse justify-start items-center gap-2">
				<img
					src="https://media.licdn.com/dms/image/C4E0BAQGRFxLWQNnM-g/company-logo_200_200/0/1667903738571?e=2147483647&v=beta&t=PlVZTwMEbnpdDZvLGUVYlwdt59qtWk3PfZ3-kGtjN5U"
					alt="yalidine"
					className="w-1/6 h-1/6 rounded-md m-2"
				/>
				<p>yalidine</p>
				<div className=" flex flex-row-reverse w-full justify-end gap-10">
					<p>price : 500 da</p>
				</div>
			</div>
		</div>
	);
}
