import { Box, Stack, Typography } from "@mui/material"
import CustomButton from "../../components/CustomButton"
import { useLocation, useNavigate } from "react-router-dom"

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
					<Typography
						padding="20px"
						textAlign="justify"
						variant="h2"
						marginTop="auto"
						letterSpacing={"3px"}
						lineHeight={"30px"}
					>
						Welcome to our cutting-edge CV Generator, where crafting the perfect
						resume is a breeze. Whether you're a seasoned professional or just
						starting your career journey, our platform is designed to empower
						you with the tools needed to showcase your skills, experiences, and
						achievements effectively.
					</Typography>
					<br />
					<CustomButton text={"Create CV"} handleClick={handleClick} />
					<br />
					<Typography
						padding={"20px"}
						textAlign="justify"
						variant="h2"
						letterSpacing={"3px"}
						lineHeight={"30px"}
					>
						Gone are the days of struggling with formatting and design. Our
						intuitive interface guides you through the process, allowing you to
						create a polished and professional CV in minutes. With a wide range
						of templates to choose from, you can tailor your resume to suit your
						industry and personal style.
					</Typography>
				</>
			) : router.pathname === "/cv-form" ? (
				<Typography>tab of CV</Typography>
			) : null}
		</Stack>
	)
}

export default index
