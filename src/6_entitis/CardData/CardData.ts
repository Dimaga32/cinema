export type CardData = {
	id: number
	name: string
	description: string
	image: string
	rating: number
	genre: Genre
}
type Genre =
	| "Fantasy"
	| "Action movie"
	| "Adventures"
	| "Animation"
	| "Comedy"
	| "Drama"
	| "Historical"
	| "Musical"
	| "Horror"
	| "Romance"
