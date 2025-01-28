import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { useState } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import { useDataLoader } from "../../7_shared/Hooks/UseDataLoader.ts"
import classes from "./film.module.scss"
import { useParams } from "react-router-dom"

export default function FilmContent(): ReactNode {
	const { id } = useParams()
	const [film, Setfilm] = useState<TypeCardData>()
	useDataLoader(`http://localhost:5000/films/${id}`, Setfilm, [])
	return (
		<div>
			<Header />
			<div style={{ margin: "10vw" }}>
				{JSON.stringify(film)}
				{JSON.stringify(classes)}
			</div>

			<Footer />
		</div>
	)
}
