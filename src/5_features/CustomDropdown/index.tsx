import { ReactNode } from "react"
import GenreDropdownContent from "./CustomDropdown.tsx"
import { TypeGenre } from "../../6_entitis/CardData/CardDataEntiti.ts"

interface GenreDropdownProps {
	value: TypeGenre
	width?: string
	height?: string
	fontSize?: string
}

export default function CustomDropDown({
	value,
	width = "200px",
	height = "40px",
	fontSize = "16px",
}: GenreDropdownProps): ReactNode {
	return (
		<GenreDropdownContent
			value={value}
			width={width}
			height={height}
			fontSize={fontSize}
		/>
	)
}
