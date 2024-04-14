import { createTheme } from "@mui/material"

export const template1Theme = createTheme({
	typography: {
		h1: {
			fontFamily: ["Sansita"].join(","),
			color: "#FFFFFF",
			fontSize: "18px",
			fontWeight: 800,
		},
		h2: {
			fontFamily: ["Sansita"].join(","),
			color: "#FFFFFF",
			fontSize: "16px",
		},
		h3: {
			fontFamily: ["Sansita"].join(","),
			color: "#FFFFFF",
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
