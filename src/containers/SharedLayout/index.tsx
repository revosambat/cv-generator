import { Box, Stack, Typography } from "@mui/material"
import CustomButton from "../../components/CustomButton"
import { useLocation, useNavigate } from "react-router-dom"
import CVHeaderList from "./components/CVHeaderList"

const index = () => {
	const router = useLocation()
	const navigate = useNavigate()
	const handleClick = () => {
		navigate("/cv-form")
	}
	return (
		<Stack
			height="100%"
			justifyContent="center"
			alignItems="center"
			overflow={"scroll"}
		>
			{router.pathname == "/" ? (
				<>
					<CustomButton text={"Create CV"} handleClick={handleClick} />
				</>
			) : router.pathname === "/cv-form" ? (
				<CVHeaderList />
			) : null}
		</Stack>
	)
}

export default index
