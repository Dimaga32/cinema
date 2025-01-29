import { ReactNode } from "react"
import MySearchContent from "./mySearch.tsx"

export default function MySearch({ width = "300px",height="40px",fontSize = '16px', onchange=(e:React.ChangeEvent<HTMLInputElement>)=>{if(!e)return} }): ReactNode  {

	return (
		<MySearchContent width={width} height={height} fontSize={fontSize} onchange={onchange}/>
	);
};
