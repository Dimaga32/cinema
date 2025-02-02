import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { useState } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts"
import { useDataLoader } from "../../7_shared/Hooks/UseDataLoader.ts"
import classes from "./film.module.scss"
import { useParams } from "react-router-dom"
import { Image } from "react-bootstrap"
import Stars from "../../7_shared/UI/Stars"
import Sessions from "../../5_features/Sessions"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"

export default function FilmContent(): ReactNode {
	const { id } = useParams()
	const [film, Setfilm] = useState<TypeCardData>()
	const [purchases, setPurchases] = useState<TypePurchases[]>([]);
	useDataLoader(`http://localhost:5000/api/Film/${id}`, Setfilm, [])
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, []);
	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			{film == undefined ? (
				<div>Loaing</div>
			) : (
				<div className={classes.box}>
					<h1 className="h1 text-center">{film.name}</h1>
					<p className={"text-center fs-2"}>
						<strong>Plot:</strong> {film.description}
					</p>
					<Image
						width={"80%"}
						className={`align-self-center`}
						src={film.image}
						alt={`${film.name}.png`}
					/>
					<p className={"text-center fs-2"}>
						<strong>Genre:</strong> {film.genre}
					</p>
					<p className={"text-center fs-2"}>
						<strong>Rating:</strong> {film.rating}
					</p>
					<div
						className={`d-flex justify-content-center align-items-center`}
					>
						<Stars rating={film.rating} width="80vw" />
					</div>
					<Sessions film={film} />
				</div>
			)}

			<Footer />
		</div>
	)
}
