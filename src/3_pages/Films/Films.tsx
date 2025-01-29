import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { useState } from "react"
import { TypeCardData, TypeGenre } from "../../6_entitis/CardData/CardData.ts"
import { useDataLoader } from "../../7_shared/Hooks/UseDataLoader.ts"
import Card from "../../5_features/Card"
import classes from "./films.module.scss"
import MySearch from "../../7_shared/UI/mySearch"
import Stars from "../../7_shared/UI/stars"
import CustomDropDown from "../../5_features/CustomDropdown"
import useFilmsFilter from "../../5_features/FilmsFilter/useFilmsFilter.ts"

export default function FilmsContent(): ReactNode {
	const [films, Setfilms] = useState<TypeCardData[]>([])
	useDataLoader("http://localhost:5000/films", Setfilms, [])
	const [search, SetSearch] = useState<string>("")
	const changesearch=(e:React.ChangeEvent<HTMLInputElement>)=>{SetSearch(e.target.value)}
	const [genre, SetGenre] = useState<TypeGenre>('none')
	const [rating, SetRating] = useState<number>(0)
	const filteredFilms:false|TypeCardData[] = useFilmsFilter(films,genre,search,rating)
	const changeRating = (e:React.MouseEvent<HTMLDivElement>):void=>{
		const target = e.target as HTMLElement;
		const closestElement = target.closest("[data-rating]") as HTMLElement;
		if (closestElement) {
			const rating:number = parseFloat(closestElement.dataset.rating ?? "0");
			SetRating(rating);
		}
		return;
	}
	return (
		<div>
			<Header />
			<div className={classes.sort}>
				<MySearch width="55vw" fontSize="22px" height="5vh" onchange={changesearch}/>
				<div className={'flex-column '+classes.genandstar}>
					<Stars rating={rating} width={'20vw'} starSize={'clamp(10px,2vw,50px)'} onclick={changeRating}/>
					<CustomDropDown  value={"none"} width={`30vw`} height={'5vh'} fontSize={'clamp(12px,2vw,26px)'} onChange={(value)=>{SetGenre(value)}}/>
				</div>
			</div>
			<div className={classes.grid}>
				{
					filteredFilms && Array.isArray(filteredFilms) && filteredFilms.map((CardData: TypeCardData): ReactNode => {
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
			</div>

			<Footer />
		</div>
	)
}
