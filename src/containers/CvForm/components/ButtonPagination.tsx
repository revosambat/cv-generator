import Grid from "@mui/material/Grid"
import React from "react"
import CustomButton from "../../../components/CustomButton"

interface PropTypes {
	handlePrev: () => void
	handleNext: () => void
}
const ButtonPagination = ({ handlePrev, handleNext }: PropTypes) => {
	return (
		<Grid item>
			<CustomButton text={"Previous"} handleClick={handlePrev} />
			<CustomButton text={"Next"} handleClick={handleNext} />
		</Grid>
	)
}

export default ButtonPagination
