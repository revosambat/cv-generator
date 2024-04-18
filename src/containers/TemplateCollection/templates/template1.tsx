import { Divider, Rating, Stack, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import profileImage from "../../../assets/templateprofile.jpeg"
import { MutableRefObject } from "react"

const Template1 = ({
	exportRef,
}: {
	exportRef: MutableRefObject<HTMLDivElement | null>
}) => {
	return (
		<Stack ref={exportRef} flexDirection={"row"}>
			<Box
				minHeight={"100%"}
				bgcolor={"#a2ab89"}
				display={"flex"}
				flexDirection={"column"}
				flex={1.5}
				alignItems={"center"}
				p={4}
			>
				<Box
					width={200}
					height={260}
					border={"1px solid #000"}
					borderRadius={"50%"}
					overflow={"hidden"}
					marginTop={"10%"}
					mb={3}
				>
					<img
						width={"100%"}
						height={"100%"}
						src={profileImage}
						alt="profile image"
					/>
				</Box>
				<Box textAlign={"center"} marginTop={"10%"} mb={10}>
					<Typography variant="h1" mb={3}>
						<i>John Doe</i>
					</Typography>
					<Typography variant="h3" mb={1}>
						234-222-3434 | example@gmail.com
					</Typography>
					<Typography variant="body1" mb={1}>
						https://linkedin.com/john-doe-147jfskhre/ |
						https://example.portfolio.com
					</Typography>
					<Typography variant="h2" mb={1}>
						Address, City, Country
					</Typography>
				</Box>
				<Box marginTop={"10%"}>
					<Typography variant="h2" mb={2}>
						<Divider textAlign="left">
							<i>Profile</i>
						</Divider>
					</Typography>
					<Typography variant="body1" textAlign={"justify"}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					</Typography>
				</Box>
			</Box>
			<Box height={"100%"} flex={2} p={6}>
				<Box mb={3}>
					<Typography variant="h2" color={"#a2ab89"} mb={2}>
						<Divider textAlign="right">
							<i>Education</i>
						</Divider>
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						College Name / University Name
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Address
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Start Year - End Year
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Field of Study
					</Typography>
					<Typography
						variant="body1"
						color={"#000000"}
						mb={2}
						textAlign={"justify"}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Typography>
					<Typography variant="h2" color={"#a2ab89"}>
						<Divider>**</Divider>
					</Typography>
				</Box>
				<Box mb={3}>
					<Typography variant="h2" color={"#a2ab89"} mb={2}>
						<Divider textAlign="right">
							<i>Experience</i>
						</Divider>
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Company Name
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Address
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Designation
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Start Year - End Year
					</Typography>
					<Typography
						variant="body1"
						color={"#000000"}
						mb={2}
						textAlign={"justify"}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Typography>
					<Typography variant="h2" color={"#a2ab89"}>
						<Divider>**</Divider>
					</Typography>
				</Box>
				<Box mb={3}>
					<Typography variant="h2" color={"#a2ab89"} mb={2}>
						<Divider textAlign="right">
							<i>Projects</i>
						</Divider>
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Project Name
					</Typography>
					<Typography variant="h3" color={"#000000"} mb={1} textAlign={"right"}>
						Start Year - End Year
					</Typography>
					<Typography
						variant="body1"
						color={"#000000"}
						mb={2}
						textAlign={"justify"}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Typography>
					<Typography variant="h2" color={"#a2ab89"}>
						<Divider>**</Divider>
					</Typography>
				</Box>
				<Box mb={3}>
					<Typography variant="h2" color={"#a2ab89"} mb={2}>
						<Divider textAlign="right">
							<i>Skills Highlights</i>
						</Divider>
					</Typography>
					<Stack flexDirection={"row"} justifyContent={"space-between"}>
						<Typography variant="h3" color={"#000000"}>
							Skill 1
						</Typography>
						<Rating name="React" value={3} readOnly />
					</Stack>
					<Stack flexDirection={"row"} justifyContent={"space-between"}>
						<Typography variant="h3" color={"#000000"}>
							Skill 2
						</Typography>
						<Rating name="React" value={3} readOnly />
					</Stack>
					<Typography variant="h2" color={"#a2ab89"}>
						<Divider>**</Divider>
					</Typography>
				</Box>
				<Box>
					<Typography variant="h2" color={"#a2ab89"} mb={2}>
						<Divider textAlign="right">
							<i>Language</i>
						</Divider>
					</Typography>
					<Stack flexDirection={"row"} justifyContent={"space-between"}>
						<Typography variant="h3" color={"#000000"}>
							English
						</Typography>
						<Rating name="React" value={4} readOnly />
					</Stack>
				</Box>
			</Box>
		</Stack>
	)
}

export default Template1
