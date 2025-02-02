import { TypeDays,TypeTime } from "../../6_entitis/CardData/CardDataEntiti.ts"
export async function PostFunction(dayOfWeek: TypeDays, timeSeans: TypeTime, filmid: number) {
	const url = "http://localhost:5000/api/Purchases";

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

	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

	// Данные для отправки
	const data = {
		userid: 0,
		data: formattedDate,
		status: "inProcess",
		filmid: filmid,
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}

		const result = await response.json();
		console.log("Success:", result);
	} catch (error) {
		console.error("Failed to send data:", error);
	}
}
