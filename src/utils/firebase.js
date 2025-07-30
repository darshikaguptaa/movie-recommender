// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBnnqt56ssqKjvNBROijwCX0fnRngS3i4w",
	authDomain: "movierecommendernetflix.firebaseapp.com",
	projectId: "movierecommendernetflix",
	storageBucket: "movierecommendernetflix.firebasestorage.app",
	messagingSenderId: "1095167116931",
	appId: "1:1095167116931:web:19a578634b1923603b7db6",
	measurementId: "G-NBXNFWPZD7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
