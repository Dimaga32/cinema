import { StrictMode } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./1_app"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
