import { useEffect, useState } from "react"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"

export function usePurchasesLoader(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deeps: any[]
): TypePurchases[] {
	const [answer, setAnswer] = useState([])
	useEffect(() => {
		const verifyTokens = async () => {
			const accessToken = localStorage.getItem("accessToken")
			const refreshToken = localStorage.getItem("refreshToken")
			// Если токенов нет, сразу выходим

			if (!accessToken && !refreshToken) {
				localStorage.removeItem("accessToken")
				localStorage.removeItem("refreshToken")
				return
			}

			try {
				const response = await fetch(
					"http://localhost:5000/api/user/verify-tokens",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${accessToken}`,
							"Refresh-Token": refreshToken || "",
						},
					}
				)

				if (response.ok) {
					const data = await response.json()
					try {
						const res = await fetch(
							`http://localhost:5000/api/Purchases/${data.userId}`,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/json",
								},
							}
						)

						if (response.ok) {
							const JSONres = await res.json()
							setAnswer(JSONres)
						} else {
							return
						}
					} catch (error) {
						console.error(error)
					}
					// Обновляем accessToken, если пришёл новый

					const newAccessToken = response.headers.get("New-Access-Token")
					if (newAccessToken) {
						localStorage.setItem("accessToken", newAccessToken)
					}
				}
			} catch (error) {
				console.error("Error verifying tokens:", error)
				setAnswer([])
			}
		}

		verifyTokens()
	}, deeps) // Убираем localStorage из зависимостей

	return answer
}
