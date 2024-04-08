import Grid from "@mui/material/Grid"
import CustomButton from "../../../components/CustomButton"

interface PropTypes {
	handlePrev: () => void
	handleNext: () => void
}
const ButtonPagination = ({ handlePrev, handleNext }: PropTypes) => {
	return (
		<>
			<Grid
				item
				sx={{ display: "flex", justifyContent: "space-between" }}
				md={12}
				mt={5}
			>
				<CustomButton text={"Previous"} handleClick={handlePrev} />
				<CustomButton text={"Next"} handleClick={handleNext} />
			</Grid>
		</>
	)
}

export default ButtonPagination
