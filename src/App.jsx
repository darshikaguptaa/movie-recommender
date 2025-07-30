import { useState } from "react"
import "./App.css"
import Main from "./components/Main"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
	const [count, setCount] = useState(0)

	return (
		<Provider store={appStore}>
			<Main />
		</Provider>
	)
}

export default App
