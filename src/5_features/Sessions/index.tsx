import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts"
import SessionsContent from "./Sessions.tsx"
import { ReactNode } from "react"


export default function Sessions({ film,count,setData}: {film:TypeCardData,count:number,setData: React.Dispatch<React.SetStateAction<number>>}): ReactNode {
	return <SessionsContent film={film} count={count} setData={setData}/>
}
