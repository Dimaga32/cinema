import { ReactNode } from "react"
import Header from "../../4_widgets/Header"
import Footer from "../../4_widgets/Footer"

export default  function Main():ReactNode {
	return (
		<div>
			<Header />
			<h1>
				Main
			</h1>
			<Footer />
		</div>
	)
}