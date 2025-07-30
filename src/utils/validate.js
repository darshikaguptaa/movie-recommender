export const validateData = (email, password) => {
	const emailValidation = /^\S+@\S+\.\S+$/.test(email)
	const passwordValidation =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
			password
		)

	if (!emailValidation) {
		return "Email is not valid!"
	}

	if (!passwordValidation) {
		return "Password is not valid!"
	}

	return null
}
