import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"

const Browse = () => {
	const showGpt = useSelector((store) => store.gpt?.showGptSearch)
	console.log(showGpt)

	useNowPlayingMovies()

	return (
		<div>
			<Header />
			{showGpt ? (
				<GPTSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	)
}

export default Browse
