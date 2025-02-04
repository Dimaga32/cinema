import { ChangeEvent, ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { useState } from "react"
import {
	TypeCardData,
	TypeGenre,
} from "../../6_entitis/CardData/CardDataEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"
import Card from "../../5_features/Card"
import classes from "./films.module.scss"
import MySearch from "../../7_shared/UI/mySearch"
import Stars from "../../7_shared/UI/Stars"
import CustomDropDown from "../../5_features/CustomDropdown"
import useFilmsFilter from "../../2_processes/FilmsFilter/useFilmsFilter.ts"
import { useFiltersFilmsSelector } from "../../2_processes/FilmsFilter/filterFilmsReducer.ts"
import { useDispatch } from "react-redux"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"

export default function FilmsContent(): ReactNode {
	const [purchases, setPurchases] = useState<TypePurchases[]>([])
	const [films, Setfilms] = useState<TypeCardData[]>([])
	useDataLoaderTodb("http://localhost:5000/api/Films", Setfilms, [])
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, [])

	const dispatch = useDispatch()
	const changesearch = (e: ChangeEvent<HTMLInputElement>): void => {
		const value: string = e.target.value
		dispatch({
			type: "setSearch",
			payload: { search: value },
		})
	}

	const search: string = useFiltersFilmsSelector(
		(state) => state.filtersFilms.search
	)
	const genre: TypeGenre = useFiltersFilmsSelector(
		(state) => state.filtersFilms.genre
	)
	const rating: number = useFiltersFilmsSelector(
		(state) => state.filtersFilms.rating
	)

	const filteredFilms: false | TypeCardData[] = useFilmsFilter(
		films,
		genre,
		search,
		rating
	)
	const changeRating = (e: React.MouseEvent<HTMLDivElement>): void => {
		const target = e.target as HTMLElement
		const closestElement = target.closest("[data-rating]") as HTMLElement
		if (closestElement) {
			const rating: number = parseFloat(closestElement.dataset.rating ?? "0")
			dispatch({ type: "setRating", payload: { rating } })
		}
		return
	}
	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			<div className={classes.sort}>
				<MySearch
					width="55vw"
					fontSize="22px"
					height="5vh"
					onchange={changesearch}
				/>
				<div className={"flex-column " + classes.genandstar}>
					<Stars
						rating={rating}
						width={"20vw"}
						starSize={"clamp(10px,2vw,50px)"}
						onclick={changeRating}
					/>
					<CustomDropDown
						value={"none"}
						width={`30vw`}
						height={"5vh"}
						fontSize={"clamp(12px,2vw,26px)"}
					/>
				</div>
			</div>
			<div className={classes.grid}>
				{filteredFilms &&
					Array.isArray(filteredFilms) &&
					filteredFilms.map((CardData: TypeCardData): ReactNode => {
						return (
							<Card
								id={CardData.id}
								key={CardData.id}
								name={CardData.name}
								description={CardData.description}
								image={CardData.image}
								rating={CardData.rating}
								genre={CardData.genre}
								cost={CardData.cost}
								show_days={CardData.show_days}
								show_times={CardData.show_times}
							/>
						)
					})}
			</div>

			<Footer />
		</div>
	)
}
