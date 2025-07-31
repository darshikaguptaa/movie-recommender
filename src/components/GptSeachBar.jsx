import React from "react"

const GptSeachBar = () => {
	return (
		<div className="pt-[10%] flex justify-center">
			<form action="" className="w-1/2 bg-black grid grid-cols-12">
				<input
					type="text"
					className="p-4 m-4 bg-white col-span-9"
					placeholder="What would you like to watch today"
				/>
				<button className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3">
					Search
				</button>
			</form>
		</div>
	)
}

export default GptSeachBar
