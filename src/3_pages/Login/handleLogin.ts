import { FormEvent } from "react";

export async function handleLogin(
	e: FormEvent<HTMLFormElement>,
	formData: {
		email: string;
		password: string;
	}
): Promise<boolean> {
	e.preventDefault();

	try {
		const response = await fetch("http://localhost:5000/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		// Логируем весь ответ для отладки

		if (response.ok) {
			const accessToken = response.headers.get('Access-Token');
			const refreshToken = response.headers.get('Refresh-Token');

			if (accessToken && refreshToken) {
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('refreshToken', refreshToken);
				return true;
			} else {
				console.error('Tokens not found in response headers');
				return false;
			}
		} else {
			// Логируем текст ошибки, если ответ не OK
			const errorText = await response.text();
			console.error("Registration failed:", errorText);
			return false;
		}
	} catch (error) {
		console.error("Error during registration:", error);
		return false;
	}

}