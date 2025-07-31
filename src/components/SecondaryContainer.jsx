import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"
import MoviesCard from "./MoviesCard"
// import { movies } from "../utils/constants"
import NewMovieCard from "./MoviesCard"

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)
	console.log(movies)

	if (!Array.isArray(movies) || movies.length === 0) {
		return <div>Loading movies...</div>
	}

	return (
		<div className="-mt-30 bg-black">
			<MovieList title={"Now Playing"} movies={movies} />
			<MovieList title={"Upcoming"} movies={movies} />
			<MovieList title={"Trending"} movies={movies} />
			<MovieList title={"Continue Watching"} movies={movies} />
			<MovieList title={"Bollywood"} movies={movies} />
			<MovieList title={"For You"} movies={movies} />
			<MovieList title={"Award Winning"} movies={movies} />
		</div>
	)
}

export default SecondaryContainer
