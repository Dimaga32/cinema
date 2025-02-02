import { TypeGenre } from "../CardData/CardDataEntiti.ts"

export type TypeFiltersFilms={

	rating:number,
	search:string,
	genre:TypeGenre
}
type TypeSearchFiltersFilms={
	type: "setSearch",
	payload:{search:string}
}
type TypeGenreFiltersFilms={
	type: "setGenre",
	payload:{genre:TypeGenre}
}
type TypeRatingFiltersFilms={
	type: "setRating",
	payload:{rating:number}
}
export type TypeActionFiltersFilms =TypeGenreFiltersFilms | TypeRatingFiltersFilms | TypeSearchFiltersFilms
