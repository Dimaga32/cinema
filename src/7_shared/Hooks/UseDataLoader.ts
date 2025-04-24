import { useEffect } from "react"
import axios, { AxiosResponse } from "axios"

export function useDataLoader<T>(
	url: string,
	setData: React.Dispatch<React.SetStateAction<T>>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deps: any[] = []
): void {
	useEffect((): void => {
		axios
			.get<T>(url)
			.then((res: AxiosResponse<T>): void => {
				setData(res.data)
			})
			.catch((error: { message: string }): void => {
				console.error("Ошибка:", error.message)
			})
	}, [url, ...deps])
}
