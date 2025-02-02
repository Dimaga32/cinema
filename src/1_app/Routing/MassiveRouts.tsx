import Main from "../../3_pages/Main"
import Films from "../../3_pages/Films"
import Film from "../../3_pages/Film"
import { ReactNode } from "react"
import Error from "../../3_pages/Error"
import { Navigate } from "react-router-dom"
import Purchases from "../../3_pages/Purchases"
import Register from "../../3_pages/Register"
import Login from "../../3_pages/Login"
import Account from "../../3_pages/Account"

export type TypePathAndComponent = {
	path: string
	element: ReactNode
}
export const MassivePathAndComponent: TypePathAndComponent[] = [
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/films",
		element: <Films />,
	},
	{
		path: "/film/:id",
		element: <Film />,
	},
	{
		path: "/Login",
		element: <Login />,
	},
	{
		path: "/Register",
		element: <Register />,
	},
	{
		path: "/Purchases",
		element: <Purchases />,
	},
	{
		path: "/Error",
		element: <Error />,
	},
	{
		path: "/Account",
		element: <Account />,
	},
	{
		path: "*",
		element: <Navigate to="/Error" />,
	},
]
