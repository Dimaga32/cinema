import { useEffect } from 'react';

export const useVerifyTokens = (setId: React.Dispatch<React.SetStateAction<number|false>>) => {
	useEffect(() => {
		const verifyTokens = async () => {
			const accessToken = localStorage.getItem('accessToken');
			const refreshToken = localStorage.getItem('refreshToken');
			// Если токенов нет, сразу выходим
			if (!accessToken && !refreshToken) {
				setId(false);
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
				return;
			}

			try {
				const response = await fetch('http://localhost:5000/api/user/verify-tokens', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
						'Refresh-Token': refreshToken || '',
					},
				});

				if (response.ok) {
					const data = await response.json();
					setId(data.userId);

					// Обновляем accessToken, если пришёл новый
					const newAccessToken = response.headers.get('New-Access-Token');
					if (newAccessToken) {
						localStorage.setItem('accessToken', newAccessToken);
					}
				} else {
					// Очищаем токены при неудачной проверке
					localStorage.removeItem('accessToken');
					localStorage.removeItem('refreshToken');
					setId(false);
				}
			} catch (error) {
				console.error('Error verifying tokens:', error);
				setId(false);
			}
		};

		verifyTokens();
	}, [setId]); // Убираем localStorage из зависимостей
};