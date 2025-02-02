import { ReactNode } from "react";
import Header from "../../4_widgets/Header";
import Footer from "../../4_widgets/Footer";
import { ChangeEvent, useState, FormEvent } from "react";
import classes from "./Login.module.scss";
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"

interface FormData {
	name_or_email: string;
	password: string;
}

export default function LoginContent(): ReactNode {
	const [purchases, setPurchases] = useState<TypePurchases[]>([]);
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, []);
	const [formData, setFormData] = useState<FormData>({
		name_or_email: "",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			<div className={classes.formWrapper}>
				<form className={classes.contactForm} onSubmit={handleSubmit}>
					<label className={classes.label+` text-center fs-4`} htmlFor="email">Name or email:</label>
					<input
						className={classes.input+` fs-5`}
						type="name_or_email"
						id="name_or_email"
						name="name_or_email"
						value={formData.name_or_email}
						onChange={handleChange}
						placeholder="Введите ваш email"
						required
					/>

					<label className={classes.label+` text-center fs-4`} htmlFor="password">Пароль:</label>
					<input
						className={classes.input+` fs-5`}
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Введите пароль"
						required
					/>

					<button className={classes.button+` fs-4`} type="submit">Login</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}