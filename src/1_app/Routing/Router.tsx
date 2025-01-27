import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MassivePathAndComponent, TypePathAndComponent } from "./MassiveRouts.tsx"
import { ReactNode } from "react"

export default function MyRouter(): ReactNode {
	return (
		<BrowserRouter>
			<Routes>
				{MassivePathAndComponent.map((ElementPathAndComponent:TypePathAndComponent):ReactNode =>
					(<Route key={ElementPathAndComponent.path}
							  path={ElementPathAndComponent.path}
							  element={ElementPathAndComponent.element}/>) )}
			</Routes>
		</BrowserRouter>
	)
}
