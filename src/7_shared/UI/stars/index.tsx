import { ReactNode } from "react"
import StarsContent from "./stars.tsx"
interface StarRatingProps {
	rating: number;
	width: string;
	starSize?: string; // Размер звёздочки (ширина и высота)
	starHeight?: string; // Высота звёздочки (если нужно отдельно управлять высотой)
	onclick?: (e:React.MouseEvent<HTMLDivElement>) => void;
}

export default function Stars({ rating, width = '300px', onclick=(e)=>{if(!e)return},starSize='24px',starHeight= starSize }:StarRatingProps): ReactNode  {

	return (
		<StarsContent rating={rating} width={width} onClick={onclick} starHeight={starHeight} starSize={starSize}/>
	);
};
