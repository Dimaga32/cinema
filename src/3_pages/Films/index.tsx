import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { useState } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import { useDataLoader } from "../../7_shared/Hooks/UseDataLoader.ts"
import Card from "../../7_shared/UI/Card/Card.tsx"

export default  function Films():ReactNode {
	const [films, Setfilms]= useState<TypeCardData[]>([])
	useDataLoader("http://localhost:5000/films",Setfilms,[])
	return (
		<div>
			<Header />
			{films.map((CardData:TypeCardData):ReactNode=>{
				return (
					<Card
						id={CardData.id}
						key={CardData.id}
						name={CardData.name}
						description={CardData.description}
						image={CardData.image}
						rating={CardData.rating}
						genre={CardData.genre}

					/>
				)
			})}
			<Footer />
		</div>
	)
}