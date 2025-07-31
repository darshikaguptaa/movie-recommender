import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const VideoTitle = ({ title, overview }) => {
	return (
		<>
			{/* <div className="absolute inset-0 z-20 flex items-center justify-center">
				<h1 className="text-white text-4xl font-bold">Your Text Here</h1>
			</div> */}
			<div className="w-screen aspect-video pt-[22%] px-12 absolute text-white bg-gradient-to-r from-black/55">
				<h1 className="text-5xl font-bold"> {title}</h1>
				<p className="py-6 text-lg md:w-1/3 sm:w-1/4">{overview}</p>
				<div className="">
					<button className="bg-white text-black py-3 px-10 text-xl rounded cursor-pointer hover:bg-white/80">
						▷ Play
					</button>
					<button className="mx-2 bg-gray-100 text-black py-3 px-10 text-xl rounded cursor-pointer ">
						More Info
					</button>
				</div>
			</div>
		</>
	)
}

// linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)
// linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)

export default VideoTitle
