import { ReactNode } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import CardContent from "./Card.tsx"

export default function Card({ id, name, image }: TypeCardData): ReactNode {
	return (
		<CardContent
			id={id}
			name={name}
			image={image}
			description={""}
			rating={0}
			genre={"Fantasy"}
		/>
	)
}
