import { Request, Response } from "express"
import {
	getUserById,
	addUser,
	checkUser,
	getPurchasesNumber,
} from "../models/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const ACCESS_SECRET = "*&v%^ryCTYVBIOJPKJHVTYRUIO"
const REFRESH_SECRET = "jkui&*g^&fRTCVBUIHIO8976"
// Получение пользователя по ID

export async function getUserController(req: Request, res: Response) {
	try {
		const userId = Number(req.params.id)

		if (isNaN(userId)) {
			res.status(400).send("Invalid userId")
			return
		}

		const user = await getUserById(userId)

		if (user) {
			res.json({
				id: user.id,
				name: user.name,
				email: user.email,
				verified: user.verified,
			})
		} else {
			res.status(404).send("User not found")
		}
	} catch (err) {
		console.error("Error fetching user", err)
		res.status(500).send("Database error")
	}
}

// Регистрация пользователя
export async function addUserController(req: Request, res: Response) {
	try {
		const { name, email, password } = req.body
		const hash_password = await bcrypt.hash(password, 10)

		const newUser = await addUser(name, email, hash_password, false)

		// Генерация токенов
		const accessToken = jwt.sign(
			{ userId: newUser.id, email: newUser.email },
			ACCESS_SECRET,
			{ expiresIn: "15m" }
		)
		const refreshToken = jwt.sign(
			{ userId: newUser.id, email: newUser.email },
			REFRESH_SECRET,
			{ expiresIn: "7d" }
		)
		// Установка заголовков
		res.setHeader("Access-Token", accessToken)
		res.setHeader("Refresh-Token", refreshToken)

		res.status(201).json({ message: "User registered successfully" })
	} catch (err) {
		console.error("Error registering user", err)
		res.status(500).send("Database error")
	}
}

// Логин
export async function checkUserController(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { email, password } = req.body
		const user = await checkUser(email)

		if (!user || !(await bcrypt.compare(password, user.hash_password))) {
			res.status(401).send("Invalid credentials")
			return
		}

		// Генерация токенов
		const accessToken = jwt.sign(
			{ userId: user.id, email: user.email },
			ACCESS_SECRET,
			{ expiresIn: "15m" }
		)
		const refreshToken = jwt.sign(
			{ userId: user.id, email: user.email },
			REFRESH_SECRET,
			{ expiresIn: "7d" }
		)

		// Отправка токенов в заголовках
		res.setHeader("Access-Token", accessToken)
		res.setHeader("Refresh-Token", refreshToken)
		res.json({ message: "Login successful" })
	} catch (err) {
		console.error("Error during login", err)
		res.status(500).send("Database error")
	}
}
export async function getPurchasesNumberUserController(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const id: number = Number(req.params.id)
		const purchasesNumber = await getPurchasesNumber(id)
		res.status(200).json({ purchasesNumber: purchasesNumber })
	} catch (err) {
		console.error("Error fetching purchases count:", err)
		res.status(500).json({ purchasesNumber: 0 })
	}
}
