import { ReactNode } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts"
import CardContent from "./Card.tsx"

export default function Card({
	id,
	name,
	image,
	cost,
	show_days,
	show_times,
}: TypeCardData): ReactNode {
	return (
		<CardContent
			id={id}
			name={name}
			image={image}
			description={""}
			rating={0}
			genre={"Fantasy"}
			cost={cost}
			show_days={show_days}
			show_times={show_times}
		/>
	)
}
