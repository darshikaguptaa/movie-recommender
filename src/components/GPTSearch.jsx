import React from "react"
import GptSeachBar from "./GptSeachBar"
import GPTMovieSuggestions from "./GPTMovieSuggestions"

const GPTSearch = () => {
	return (
		<div
			className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg')]
		   bg-cover bg-center h-screen w-full relative"
		>
			<GptSeachBar />
			<GPTMovieSuggestions />
		</div>
	)
}

export default GPTSearch
