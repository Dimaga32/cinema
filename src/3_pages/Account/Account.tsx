import { ReactNode, useState } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import classes from "./Account.module.scss"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useVerifyTokens } from "../../7_shared/Hooks/useVerifyTokens.ts"
import { useUserDataLoaderTodb } from "../../7_shared/Hooks/useUserDataLoaderTodb.ts"

export default function AccountContent(): ReactNode {
	const [purchases, setPurchases] = useState<TypePurchases[]>([])
	const [id, setId] = useState<number | false>(0)
	const [user, setUser] = useState<
		{ id: number; name: string; email: string; verified: boolean } | false
	>(false)

	useVerifyTokens(setId)

	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, [])

	useUserDataLoaderTodb(
		id ? `http://localhost:5000/api/user/${id}` : "",
		setUser,
		[id]
	)

	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			{user ? (
				user.id ? (
					<div className={classes.box}>
						<h2 className={`text-center`}>Name: {user.name}</h2>
						<h3 className={`text-center`}>Email: {user.email}</h3>
						<h3 className={`text-center`}>Id: {user.id}</h3>
					</div>
				) : (
					<h1 className={classes.box + ` text-center`}>
						You are not logged!
					</h1>
				)
			) : (
				<h1 className={classes.box + ` text-center`}>
					You are not logged!
				</h1>
			)}
			<Footer />
		</div>
	)
}
