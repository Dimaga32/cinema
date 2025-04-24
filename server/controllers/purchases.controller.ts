import { Request, Response } from "express"
import {
	getAllPurchases,
	addPurchase,
	deletePurchase,
} from "../models/purchases.model.js"

// Контроллер для получения всех покупок
export async function getPurchasesController(req: Request, res: Response) {
	try {
		const id: number = Number(req.params.id)
		const purchases = await getAllPurchases(id)
		res.status(200).json(purchases)
	} catch (err) {
		console.error("Error fetching purchases", err)
		res.status(500).send("Database error")
	}
}

// Контроллер для добавления новой покупки
export async function addPurchaseController(req: Request, res: Response) {
	const { purchaseData } = req.body // Получаем данные из тела запроса

	try {
		const { userid, filmid, data, status, cost } = purchaseData // Извлекаем данные из purchaseData

		// Добавление покупки в базу данных, теперь учитываем статус
		await addPurchase(userid, filmid, data, cost, status) // Добавляем статус

		res.status(201).send("Success")
	} catch (err) {
		console.error("Error adding purchase", err)
		res.status(500).send("Database error")
	}
}

// Контроллер для удаления покупки по ID
export async function deletePurchaseController(req: Request, res: Response) {
	const { id } = req.params // Получаем параметр id из URL

	try {
		const deleted = await deletePurchase(Number(id)) // Преобразуем id в число
		if (deleted) {
			res.status(200).send("Purchase deleted")
		} else {
			res.status(404).send("Purchase not found")
		}
	} catch (err) {
		console.error("Error deleting purchase", err)
		res.status(500).send("Database error")
	}
}
