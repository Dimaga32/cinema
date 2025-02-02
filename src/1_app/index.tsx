import AppContent from "./App.tsx"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./MainReducer.ts"
export default function App(): ReactNode {
	return <Provider store={store}><AppContent /></Provider>
}
