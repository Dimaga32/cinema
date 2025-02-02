import { FormEvent } from "react"

export async function handleRegister(
e: FormEvent<HTMLFormElement>,
formData:{
	name: string,
	email: string,
	password: string,
}) {
	e.preventDefault();
	try {
		const response = await fetch("http://localhost:5000/api/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ ...formData,verified : false }),
		});
		if (response.ok) {
			console.log(response);
			return true;
		}
		else return false;
	}
	catch (error) {
		console.error(error);
		return false
	}

}