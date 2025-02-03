	import { useEffect } from "react"
	import axios, { AxiosResponse } from "axios"

	export function useUserNumberPurhasesLoaderFromdb<T>(
		url: string,
		setData: React.Dispatch<React.SetStateAction<T|false>>,
		deps: any[] = []
	): void {
		useEffect((): void => {
			const accessToken = localStorage.getItem('accessToken');
			const refreshToken = localStorage.getItem('refreshToken');

			if (!accessToken && !refreshToken) {
				setData(false);
				return;
			}
			axios
				.get(url, { headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
						'Refresh-Token': refreshToken || '',
					} }) // Устанавливаем Content-Type
				.then((res: AxiosResponse<T>): void => {
					const newAccessToken = res.headers['new-access-token'];
					if (newAccessToken) {
						localStorage.setItem('accessToken', newAccessToken);
					}
					console.log(`res:`);
					console.log(res.data);

					setData(res.data);
				})
				.catch((error) => {
					console.error("Ошибка:", error.message);
					console.error("Детали ошибки:", error.response?.data || error);
				})
		}, [url, ...deps]) // Включаем зависимости, если они есть
	}
