import PurchasesContent from "./Purchases.tsx"
import { ReactNode } from "react"
import {  TypePurchasesProps } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
export default function Purchases(
	{
		purchases,
		onDelete
	}: {
		purchases: TypePurchasesProps[];
		onDelete: (id: number) => void;
	}): ReactNode {
	return <PurchasesContent purchases={purchases} onDelete={onDelete}/>
}
