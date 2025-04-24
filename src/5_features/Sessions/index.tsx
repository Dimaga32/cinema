import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts"
import SessionsContent from "./Sessions.tsx"
import { ReactNode } from "react"

export default function Sessions({ film }: { film: TypeCardData }): ReactNode {
	return <SessionsContent film={film} />
}
