import { useEffect, useState } from "react"

export function useUserIdLoader(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deeps: any[]
): number {
	const [answer, setAnswer] = useState(0)
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
					setAnswer(data.userId)
					// Обновляем accessToken, если пришёл новый
					const newAccessToken = response.headers.get("New-Access-Token")
					if (newAccessToken) {
						localStorage.setItem("accessToken", newAccessToken)
					}
				}
			} catch (error) {
				console.error("Error verifying tokens:", error)
				setAnswer(0)
			}
		}
		verifyTokens()
	}, deeps) // Убираем localStorage из зависимостей
	return answer
}
