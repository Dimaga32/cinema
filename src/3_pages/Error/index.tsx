import { ReactNode, useState } from "react"
import Footer from "../../4_widgets/Footer"
import Header from "../../4_widgets/Header"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"

export default function Error(): ReactNode {
	const [purchases, setPurchases] = useState<TypePurchases[]>([]);
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, []);
	return (

		<div>
			<Header cartItemCounter={purchases.length} />
			<h1
				className={"text-center"}
				style={{
					marginTop: "20vh",
					marginBottom: "20vh",
					fontSize: `70px`,
				}}
			>
				Error
			</h1>
			<Footer />
		</div>
	)
}
