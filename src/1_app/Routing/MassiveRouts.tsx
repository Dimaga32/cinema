import Main from "../../3_pages/Main"
import Films from "../../3_pages/Films"
import Film from "../../3_pages/Film"
import { ReactNode } from "react"
import Error from "../../3_pages/Error"
import { Navigate } from "react-router-dom"

export type TypePathAndComponent={
	path: string,
	element:ReactNode
}
export const MassivePathAndComponent:TypePathAndComponent[]=[
	{
		path:'/',
		element:<Main/>
	},
	{
		path:'/films',
		element:<Films/>
	},
	{
		path:'/film/:id',
		element:<Film/>
	},
	{
		path:'/Error',
		element:<Error/>
	},
	{
		path:"*",
		element: <Navigate to="/Error"/>
	}
]