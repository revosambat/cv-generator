import { createTheme } from "@mui/material"

export const template3Theme = createTheme({
	typography: {
		h1: {
			fontFamily: ["Sedan"].join(","),
			color: "#3e2723",
			fontSize: "38px",
			fontWeight: 900,
		},
		h2: {
			fontFamily: ["Sedan"].join(","),
			color: "#5d4037",
			fontSize: "26px",
			fontWeight: "bolder",
		},
		h3: {
			fontFamily: ["Sedan"].join(","),
			color: "#3e2723",
			fontSize: "22px",
			fontWeight: "bolder",
		},
		body1: {
			fontFamily: ["Sedan"].join(","),
			color: "#5d4037",
			fontSize: "12px",
			fontWeight: "normal",
		},
		body2: {
			fontFamily: ["Sedan"].join(","),
			color: "#5d4037",
			fontSize: "18px",
		},
	},
})
