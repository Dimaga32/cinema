import { ReactNode } from "react"
import GenreDropdownContent from "./CustomDropdown.tsx"
import { TypeGenre } from "../../6_entitis/CardData/CardData.ts"

interface GenreDropdownProps {
	value: TypeGenre;
	onChange: (genre: TypeGenre) => void;
	width?: string;
	height?: string;
	fontSize?: string;
}

export default function CustomDropDown({
														value,
														onChange,
														width = "200px",
														height = "40px",
														fontSize = "16px",
													}: GenreDropdownProps): ReactNode {
	return (
		<GenreDropdownContent value={value} onChange={onChange} width={width} height={height} fontSize={fontSize}/>
	)
}
