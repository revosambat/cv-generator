import { createTheme, ThemeProvider } from "@mui/material"
import "./App.css"
import Router from "./router/route"

const theme = createTheme({
	palette: {
		primary: {
			main: "#CFDAEE",
		},
		secondary: {
			main: "#F6F6F6",
		},
	},
	typography: {
		h1: {
			fontFamily: ["Sansita"].join(","),
			color: "#5B7492",
			fontSize: "20px",
			fontWeight: 800,
			letterSpacing: "0.04rem",
		},
		h2: {
			fontFamily: ["Sansita"].join(","),
			color: "#5B7492",
			fontSize: "20px",
		},
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</>
	)
}

export default App
