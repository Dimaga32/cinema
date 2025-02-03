import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export function useUserDataLoaderTodb<T>(
	url: string,
	setData: React.Dispatch<React.SetStateAction<T | false>>,
	deps: any[] = []
): void {
	useEffect((): void => {
		if (!url || !url.includes("http")) {
			console.error("Invalid URL:", url);
			setData(false);
			return;
		}

		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");

		if (!accessToken && !refreshToken) {
			setData(false);
			return;
		}

		axios
			.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
					"Refresh-Token": refreshToken || "",
				},
			})
			.then((res: AxiosResponse<T>): void => {
				const newAccessToken = res.headers["new-access-token"];
				if (newAccessToken) {
					localStorage.setItem("accessToken", newAccessToken);
				}
				setData(res.data);
			})
			.catch((error) => {
				console.error("Ошибка:", error.message);
				setData(false);
			});
	}, [url, ...deps]);
}
