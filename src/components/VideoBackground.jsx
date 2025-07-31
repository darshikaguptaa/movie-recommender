import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
	const trailerDetails = useSelector((store) => store.movies?.trailerVideo)
	// console.log(trailerDetails)

	useMovieTrailer(movieId)

	return (
		<div className="w-full h-screen">
			<iframe
				className="w-full h-screen aspect-video"
				src={
					"https://www.youtube.com/embed/" +
					trailerDetails?.key +
					"?&autoplay=1&mute=1&controls=0&rel=0"
				}
				title="YouTube video player"
				frameBorder="0"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>

			{/* <div className="absolute inset-0 bg-black/30 z-10 w-screen aspect-video"></div> */}
		</div>
	)
}

export default VideoBackground
