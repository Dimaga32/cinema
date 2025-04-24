import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { ChangeEvent, useState } from "react"
import classes from "./Login.module.scss"
import { handleLogin } from "./handleLogin.ts"

interface FormData {
	email: string
	password: string
}

export default function LoginContent(): ReactNode {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	})
	const [succses, setSuccses] = useState<boolean | null>(null)
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<div>
			<Header />
			<div className={classes.formWrapper}>
				<form
					className={classes.contactForm}
					onSubmit={(e) =>
						handleLogin(e, formData).then((res) => setSuccses(res))
					}
				>
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
						Login
					</button>
					{succses ? (
						<p className="text-center fs-4">success!</p>
					) : succses === false ? (
						<p className="text-center fs-4">
							Invalid email password pair!
						</p>
					) : null}
				</form>
			</div>
			<Footer />
		</div>
	)
}
