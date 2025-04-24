import { ReactNode } from "react"
import MySearchContent from "./mySearch.tsx"

interface MySearchProps {
	width?: string
	height?: string
	fontSize?: string
	onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void // Типизация onChange
}

export default function MySearch({
	width = "300px",
	height = "40px",
	fontSize = "16px",
	onchange,
}: MySearchProps): ReactNode {
	return (
		<MySearchContent
			width={width}
			height={height}
			fontSize={fontSize}
			onchange={onchange}
		/>
	)
}
