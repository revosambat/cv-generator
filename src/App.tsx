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
		info: {
			main: "#5B7492",
			contrastText: "#CFDAEE",
		},
	},
	components: {
		MuiTab: {
			styleOverrides: {
				root: {
					width: "300px",
					color: "#5B7492",
					backgroundColor: "#CFDAEE",
					fontFamily: ["Sansita"].join(","),
					"&.Mui-selected": {
						backgroundColor: "#5B7492",
					},
				},
			},
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
		h3: {
			fontFamily: ["Sansita"].join(","),
			color: "#5B7492",
			fontSize: "14px",
		},
		body1: {
			fontFamily: ["Sansita"].join(","),
			color: "#FFFFFF",
			fontSize: "12px",
		},
		body2: {
			fontFamily: ["Sansita"].join(","),
			color: "#FFFFFF",
			fontSize: "12px",
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
