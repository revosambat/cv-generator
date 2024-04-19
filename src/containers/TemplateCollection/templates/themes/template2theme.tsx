import { createTheme } from "@mui/material"

export const template2Theme = createTheme({
	typography: {
		h1: {
			fontFamily: ["Work Sans"].join(","),
			color: "#212121",
			fontSize: "32px",
			fontWeight: 800,
		},
		h2: {
			fontFamily: ["Work Sans"].join(","),
			color: "#424242",
			fontSize: "24px",
		},
		h3: {
			fontFamily: ["Work Sans"].join(","),
			color: "#424242",
			fontSize: "16px",
		},
		body1: {
			fontFamily: ["Work Sans"].join(","),
			color: "#424242",
			fontSize: "12px",
			fontWeight: "normal",
		},
		body2: {
			fontFamily: ["Work Sans"].join(","),
			color: "#616161",
			fontSize: "10px",
		},
	},
})
