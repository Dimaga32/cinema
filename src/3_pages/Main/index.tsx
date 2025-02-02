import { ReactNode, useState } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"
import { TypePurchases } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts"

export default function Main(): ReactNode {
	const [purchases, setPurchases] = useState<TypePurchases[]>([]);
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, []);
	return (
		<div>
			<Header cartItemCounter={purchases.length} />
			<h1>Main</h1>
			<Footer />
		</div>
	)
}
