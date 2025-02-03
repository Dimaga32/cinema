import { TypeDays, TypeTime } from "../../6_entitis/CardData/CardDataEntiti.ts";

export async function TicketsToCart(dayOfWeek: TypeDays, timeSeans: TypeTime, filmid: number,cost:number) {
	const url = "http://localhost:5000/api/Purchases";

	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	// Если токенов нет, сразу выходим
	if (!accessToken || !refreshToken) {
		console.error("Tokens not found");
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		return;
	}

	// Верификация токенов
	const res = await fetch('http://localhost:5000/api/user/verify-tokens', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			'Refresh-Token': refreshToken || '', // передача refreshToken
		},
	});

	if (!res.ok) {
		console.error("Token verification failed");
		return;
	}

	const dataId = await res.json();
	const id = dataId.userId;

	// Формируем дату в нужном формате
	const currentDate = new Date();
	const daysOfWeek: TypeDays[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayIndex: number = daysOfWeek.findIndex(day => day.toLowerCase() === dayOfWeek.toLowerCase());

	if (dayIndex === -1) {
		console.error("Invalid day of the week:", dayOfWeek);
		return;
	}

	const currentDayIndex = currentDate.getDay();
	const daysUntil = (dayIndex - currentDayIndex + 7) % 7;
	currentDate.setDate(currentDate.getDate() + daysUntil);

	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
	const day = String(currentDate.getDate()).padStart(2, "0");
	const [hours, minutes] = timeSeans.split(":");

	// Форматируем дату с учетом UTC
	const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:00Z`;

	// Данные для отправки
	const data = {
		userid: id,
		data: formattedDate,
		status: "inProcess",
		filmid: filmid,
		cost:cost
	};

	try {

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ purchaseData: data }),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Error: ${response.status}, ${errorText}`);
			throw new Error(`Error: ${response.status}`);
		}

		const result = await response.json();
		console.log("Success:", result);
	} catch (error) {
		console.error("Failed to send data:", error);
	}
}
