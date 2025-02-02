import { useEffect, useState } from "react"
import { TypeCardData, TypeGenre } from "../../6_entitis/CardData/CardDataEntiti.ts"

export default function useFilmsFilter(
	films: TypeCardData[],
	genre: TypeGenre,
	search: string,
	rating: number
) {
	const [filteredFilms, setFilteredFilms] = useState<TypeCardData[] | false>(
		films
	)

	useEffect((): void => {
		if (!films[0]) {
			setFilteredFilms(false)
			return
		}
		let tempFilms = [...films]
		if (!(genre == "none")) {
			tempFilms = tempFilms.filter(
				(el: TypeCardData): boolean => el.genre == genre
			)
		}
		if (search) {
			tempFilms = tempFilms.filter((el: TypeCardData): boolean =>
				el.name.includes(search)
			)
		}
		if (rating) {
			tempFilms = tempFilms.filter(
				(el: TypeCardData): boolean => el.rating >= rating
			)
		}
		setFilteredFilms(tempFilms)
	}, [films, genre, search, rating]) // Зависимости

	return filteredFilms
}
