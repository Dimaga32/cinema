import { ReactNode } from "react"
import { TypeCardData } from "../../../6_entitis/CardData/CardData.ts"
import { Image } from "react-bootstrap"
//import classes from ".Card.module.scss"

export default function Card({id,name,description,image,rating,genre}:TypeCardData):ReactNode{
	return (
		<article className="d-inline-block">
			<h3 className="h3 text-center text-white">{name}</h3>
			<Image
				src={image}
				width="30vw"
				height="auto"
				className={" d-inline-block align-top"}
				alt={id+".jpg"}
			/>
			<p className="p fs-4 text-center text-white">{description}</p>
			<span></span>
			<span className="fs-4"> rating : {rating}</span>
			<span className="fs-4"> genre : {genre}</span>
		</article>
	)
}