import React, { useState } from "react"
import Header from "./Header"

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	return (
		<div
			className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg')]
		   bg-cover bg-center h-screen w-full relative"
		>
			<Header />
			<div className="absolute bg-repeat">
				{/* <img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
					alt="bgImage"
				/> */}
			</div>
			<form className="w-3/12 absolute p-12 bg-black/85 my-36 mx-auto right-0 left-0 text-white">
				<h1 className="font-bold  text-3xl py-4 rounded-sm">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 my-2 w-full border border-white bg-black/90 rounded-sm"
					/>
				)}
				<input
					type="text"
					placeholder="Email"
					className="p-4 my-2 w-full border border-white bg-black/90 rounded-sm"
				/>
				<input
					type="password"
					placeholder="Password"
					className="p-4 my-2 w-full border border-white bg-black/90 rounded-sm"
				/>
				<button className="p-2 my-2 bg-red-700 w-full cursor-pointer">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now!"
						: "Already Registered. Sign In now!"}
				</p>
			</form>
		</div>
	)
}

export default Login
