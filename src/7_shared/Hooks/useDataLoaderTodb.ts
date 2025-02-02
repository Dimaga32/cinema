import { useEffect } from "react"
import axios, { AxiosResponse } from "axios"

export function useDataLoaderTodb<T>(
	url: string,
	setData: React.Dispatch<React.SetStateAction<T>>,
	deps: any[] = []
): void {
	useEffect((): void => {
		axios
			.get(url, { headers: { "Content-Type": "application/json" } }) // Устанавливаем Content-Type
			.then((res: AxiosResponse<T>): void => {
				setData(res.data) // Сохраняем полученные данные в формате JSON
			})
			.catch((error) => {
				console.error("Ошибка:", error.message)
			})
	}, [url, ...deps]) // Включаем зависимости, если они есть
}
