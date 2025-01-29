import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import SessionsContent from "./Sessions.tsx"
import { ReactNode } from "react"

interface SessionsContentProps {
	film: TypeCardData;
}
export default function Sessions({ film }: SessionsContentProps):ReactNode{
	return (
		<SessionsContent film={film}/>
	)
}