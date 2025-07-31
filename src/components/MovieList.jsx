import React from "react"
import NewMovieCard from "./MoviesCard"

const MovieList = ({ title, movies }) => {
	// console.log(movies)
	return (
		<div className="px-12 text-white z-50 relative ">
			<h1 className="text-2xl py-2">{title}</h1>
			<div className="flex overflow-x-scroll no-scrollbar">
				<div className="flex">
					{movies.map((movie) =>
						movie ? <NewMovieCard key={movie.id} movie={movie} /> : null
					)}
				</div>
			</div>
		</div>
	)
}

export default MovieList
