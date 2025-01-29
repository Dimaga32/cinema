import { ReactNode } from "react"
import Footer from "../../4_widgets/Footer"
import Header from "../../4_widgets/Header"

export default function Error(): ReactNode {
	return (
		<div>
			<Header />
			<h1 className={'text-center'} style={{marginTop:'20vh',marginBottom:'20vh',fontSize:`70px`}}>Error</h1>
			<Footer />
		</div>
	)
}
