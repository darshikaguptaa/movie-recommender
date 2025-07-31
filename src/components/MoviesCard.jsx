import { IMG_CDN } from "../utils/constants"

// MoviesCard.jsx
const NewMovieCard = ({ movie }) => {
	if (!movie) return null

	return (
		<div className="w-48 pr-4">
			<img src={IMG_CDN + movie.poster_path} alt="movieCard" />
			<p>{movie.original_title}</p>
		</div>
	)
}

export default NewMovieCard
