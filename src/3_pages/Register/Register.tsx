import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { ChangeEvent, useState } from "react"
import classes from "./Register.module.scss"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"
import { handleRegister } from "./handleRegister.ts"

interface FormData {
	name: string
	email: string
	password: string
}

export default function RegisterContent(): ReactNode {
	const [succses, setSuccses] = useState<boolean | null>(null)
	const [purchases, setPurchases] = useState<TypePurchases[]>([])

	// Загружаем покупки
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, [])
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		password: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			<div className={classes.formWrapper}>
				<form
					className={classes.contactForm}
					onSubmit={(e) => {
						handleRegister(e, formData).then((res) => setSuccses(res))
					}}
				>
					<label
						className={classes.label + ` text-center fs-4`}
						htmlFor="name"
					>
						Имя:
					</label>
					<input
						className={classes.input + ` fs-5`}
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Введите ваше имя"
						required
					/>

					<label
						className={classes.label + ` text-center fs-4`}
						htmlFor="email"
					>
						Email:
					</label>
					<input
						className={classes.input + ` fs-5`}
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Введите ваш email"
						required
					/>

					<label
						className={classes.label + ` text-center fs-4`}
						htmlFor="password"
					>
						Password:
					</label>
					<input
						className={classes.input + ` fs-5`}
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Введите пароль"
						required
					/>

					<button className={classes.button + ` fs-4`} type="submit">
						Register
					</button>
					{succses ? (
						<p className="text-center fs-4">success!</p>
					) : succses === false ? (
						<p className="text-center fs-4">Email is already in use!</p>
					) : null}
				</form>
			</div>
			<Footer />
		</div>
	)
}
