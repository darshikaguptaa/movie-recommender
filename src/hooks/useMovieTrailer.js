import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch()

	const getMovieTrailer = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		)
		const json = await data.json()
		// console.log(json)

		const trailer = json.results.filter(
			(video) => video.name == "Official Trailer"
		)
		dispatch(addTrailerVideo(trailer[0]))
	}

	useEffect(() => {
		getMovieTrailer()
	}, [])
}

export default useMovieTrailer
