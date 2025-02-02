// import { useSelector } from "react-redux"
// import { TypeReducerState } from "../../1_app/MainReducer.ts"
//
// const startStateFiltersFilms:TypeFiltersFilms={
// 	rating:0,
// 	search:'',
// 	genre:"none"
// }
// const setSearch = "setSearch" as const;
// const setGenre="setGenre" as const
// const setRating="setRating" as const
//
// export const buyingTicketsReducer=(state=startStateFiltersFilms, action:TypeActionFiltersFilms):TypeFiltersFilms=>{
// 	switch (action.type){
// 		case setSearch:
// 			return {
// 				...state,
// 				search:action.payload.search}
// 		case setGenre:
// 			return {
// 				...state,
// 				genre:action.payload.genre}
// 		case setRating:
// 			return {
// 				...state,
// 				rating:action.payload.rating}
// 		default:
// 			return state
// 	}
// }
// export const useBuyingTicketsReducer = useSelector.withTypes<TypeReducerState>();
