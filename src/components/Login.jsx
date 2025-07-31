import React, { useRef, useState } from "react"
import Header from "./Header"
import { validateData } from "../utils/validate"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)

	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const handleButtonClick = () => {
		const msg = validateData(email.current.value, password.current.value)
		setErrorMsg(msg)

		if (msg) return

		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: "https://avatars.githubusercontent.com/u/76615910?v=4",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							)
						})
						.catch((error) => {
							setErrorMsg(error.message)
						})

					// console.log(users)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMsg(`${errorCode} ${errorMessage}`)
				})
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					// console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMsg(`${errorCode} ${errorMessage}`)
				})
		}
	}

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
		setErrorMsg(null)
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
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
				className="w-2/7 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white"
			>
				<h1 className="font-bold  text-3xl py-4 rounded-sm">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-2 w-full border border-white bg-black/75 rounded-sm"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email"
					className="p-4 my-2 w-full border border-white bg-black/75 rounded-sm"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-2 w-full border border-white bg-black/75 rounded-sm"
				/>
				<p className="text-red-500 p-2">{errorMsg}</p>
				<button
					onClick={handleButtonClick}
					className="p-2 my-2 bg-red-700 w-full cursor-pointer"
				>
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
