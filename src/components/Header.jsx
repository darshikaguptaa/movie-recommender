import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { NETFLIX_USER, LOGO } from "../utils/constants"

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((store) => store.user)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				)
				navigate("/browse")
			} else {
				dispatch(removeUser())
				navigate("/")
			}
		})

		return () => {
			unsubscribe()
		}
	}, [])

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// navigate("/")
			})
			.catch((error) => {
				navigate("/error")
			})
	}

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-44" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-2">
					{user.photoURL ? (
						<img className="w-10 h-10" src={user?.photoURL} alt="userImage" />
					) : (
						<img className="w-10 h-10" src={NETFLIX_USER} alt="userImage" />
					)}
					<button
						className=" cursor-pointer text-white font-bold"
						onClick={handleSignOut}
					>
						{" "}
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	)
}

export default Header
