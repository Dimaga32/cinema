import { ReactNode } from "react"
import HeaderContent from "./header.tsx"

export default function Header({ cartItemCounter = 0 }: { cartItemCounter?: number }): ReactNode {
	return <HeaderContent cartItemCounter={cartItemCounter}/>
}
