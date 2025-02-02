import { TypeDays } from "../../6_entitis/CardData/CardDataEntiti.ts"
import { TypeTime } from "../../6_entitis/CardData/CardDataEntiti.ts"
export async function TicketsToCart(dayOfWeek: TypeDays, timeSeans: TypeTime, filmid: number, cost: number,count:number,setData:React.Dispatch<React.SetStateAction<number>>) {
	try {
		const currentDate = new Date();
		const daysOfWeek: TypeDays[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const dayIndex: number = daysOfWeek.findIndex(day => day.toLowerCase() === dayOfWeek.toLowerCase());

		if (dayIndex === -1) {
			throw new Error("Invalid day of the week. Please provide a valid day in English, e.g., 'Monday'.");
		}

		const currentDayIndex = currentDate.getDay();
		const daysUntil = (dayIndex - currentDayIndex + 7) % 7;
		currentDate.setDate(currentDate.getDate() + daysUntil);

		const year = currentDate.getFullYear();
		const month = String(currentDate.getMonth() + 1).padStart(2, "0");
		const day = String(currentDate.getDate()).padStart(2, "0");
		const [hours, minutes] = timeSeans.split(":");

		const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
		// Формируем объект данных
		const data = {
			purchaseData: {
				userid: 0, // пока не используется
				data: formattedDate,
				status: "inProcess", // начальный статус
				filmid: filmid,
				cost: cost // добавляем стоимость
			},
			time: formattedDate
		};
		// Отправляем данные на сервер
		const response = await fetch("http://localhost:5000/api/Purchases", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});


		// Проверяем, был ли запрос успешным
		if (!response.ok) {
			console.error("Failed to process purchase:", await response.text());
		}
	} catch (err) {
		console.error("Error while processing the purchase:", err);
	}
 finally {
		setData(count+1)
	}
}
