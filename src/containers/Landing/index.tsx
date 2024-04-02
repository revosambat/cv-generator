// import CustomButton from "../../components/CustomButton"
import { Box } from "@mui/material"
import dashboardsvg from "../../assets/dasboard.svg"
const Landing = () => {
	return (
		<>
			<Box
				sx={{
					background: `url(${dashboardsvg})`,
					backgroundSize: "auto",
					backgroundRepeat: "no-repeat",
					padding: "30px",
					height: "100%",
				}}
			></Box>
		</>
	)
}

export default Landing
