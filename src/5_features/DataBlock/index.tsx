import { ReactNode } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import DataBlockContent from "./DataBlock.tsx"

export default function DataBlock({ id, name, image }: TypeCardData): ReactNode {
	return (
		<DataBlockContent id={id} name={name} image={image} description={""} rating={0} genre={"Fantasy"}/>
	)
}
