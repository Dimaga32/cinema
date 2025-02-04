import { filtersFilmsReducer } from "../2_processes/FilmsFilter/filterFilmsReducer.ts"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

type TypeActionCreater = {
	type: string
	payload: object | null
}

const MainReducer = combineReducers({
	filtersFilms: filtersFilmsReducer,
	//	buyingTickets:buyingTicketsReducer
})
export const store = configureStore({
	reducer: MainReducer,
})

export const ActionCreater = (
	type: string,
	payload: object | null = null
): TypeActionCreater => {
	return { type: type, payload: payload }
}
export type TypeDispatch = typeof store.dispatch
export type TypeReducerState = ReturnType<typeof store.getState>
