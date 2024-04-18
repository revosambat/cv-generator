import { Box, Divider, LinearProgress, Stack, Typography } from "@mui/material"
import { MutableRefObject } from "react"
import profileImage from "../../../assets/templateprofile.jpeg"

const Template2 = ({
	exportRef,
}: {
	exportRef: MutableRefObject<HTMLDivElement | null>
}) => {
	return (
		<Stack ref={exportRef} flexDirection={"column"} p={7}>
			<Box
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"space-between"}
				borderBottom={"2px solid #212121"}
				pb={2}
				mb={2}
			>
				<Box flex={1} pr={3}>
					<Typography variant="h1">John Doe</Typography>
					<Typography variant="h2">
						<i>Designation</i>
					</Typography>
					<Box mt={3} width={"100%"}>
						<Typography variant="h2" mb={2}>
							<b>ABOUT</b>
						</Typography>
						<Typography variant="body1" textAlign={"justify"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in
						</Typography>
					</Box>
				</Box>
				<Box flex={0.9} height={280} overflow={"hidden"}>
					<img
						width={"100%"}
						height={"100%"}
						src={profileImage}
						alt="profile image"
					/>
				</Box>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				borderBottom={"2px solid #212121"}
				pb={2}
				mb={2}
			>
				<Box flex={1} p={1}>
					<Typography variant="h2" mb={2}>
						<b>Work Experience</b>
					</Typography>
					<Typography variant="h3">
						Designation (Start Year - End Year)
					</Typography>
					<Typography variant="body2" mb={2}>
						Company Name - (Full Address)
					</Typography>
					<Typography variant="body1" textAlign={"justify"} mb={1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Typography>
					<Divider></Divider>
				</Box>
				<Divider orientation="vertical" flexItem></Divider>
				<Box flex={1} p={1}>
					<Typography variant="h2" mb={2}>
						<b>Educational History</b>
					</Typography>
					<Typography variant="h3">
						Field of Study (Start Year - End Year)
					</Typography>
					<Typography variant="body2" mb={2}>
						University Name - (Full Address)
					</Typography>
					<Typography variant="body1" textAlign={"justify"} mb={1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Typography>
					<Divider></Divider>
				</Box>
			</Box>
			<Box borderBottom={"2px solid #212121"} pb={2} mb={2}>
				<Typography variant="h2" mb={2}>
					<b>Project</b>
				</Typography>
				<Box
					display={"flex"}
					flexDirection={"row"}
					justifyContent={"space-between"}
					mb={2}
				>
					<Typography variant="h3">Project Name</Typography>
					<Typography variant="h3">Start Year - End Year</Typography>
				</Box>
				<Typography variant="body1" textAlign={"justify"} mb={1}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Typography>
				<Divider></Divider>
				<Box
					display={"flex"}
					flexDirection={"row"}
					justifyContent={"space-between"}
					mb={2}
					mt={2}
				>
					<Typography variant="h3">Project Name</Typography>
					<Typography variant="h3">Start Year - End Year</Typography>
				</Box>
				<Typography variant="body1" textAlign={"justify"} mb={1}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Typography>
				<Divider></Divider>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				borderBottom={"2px solid #212121"}
				pb={2}
				mb={2}
			>
				<Box flex={1} p={1}>
					<Typography variant="h2" mb={2}>
						<b>Skills Highlight</b>
					</Typography>
					<Box mb={2}>
						<Typography variant="h3" mb={1}>
							Skill 1
						</Typography>
						<LinearProgress variant="determinate" value={30} />
					</Box>
					<Box mb={2}>
						<Typography variant="h3" mb={1}>
							Skill 1
						</Typography>
						<LinearProgress variant="determinate" value={30} />
					</Box>
				</Box>
				<Divider orientation="vertical" flexItem></Divider>
				<Box flex={1} p={2}>
					<Typography variant="h2" mb={2}>
						<b>Language</b>
					</Typography>
					<Box mb={2}>
						<Typography variant="h3" mb={1}>
							Language 1
						</Typography>
						<LinearProgress variant="determinate" value={70} />
					</Box>
				</Box>
			</Box>
			<Box borderBottom={"2px solid #212121"} pb={2}>
				<Typography variant="h2" mb={2}>
					<b>Contact</b>
				</Typography>
				<Box
					display={"flex"}
					flexDirection={"row"}
					justifyContent={"space-between"}
				>
					<Box>
						<Typography variant="h3" mb={1}>
							Phone no.
						</Typography>
						<Typography variant="body1">
							<b>234-222-3434</b>
						</Typography>
					</Box>
					<Divider orientation="vertical" flexItem />
					<Box>
						<Typography variant="h3" mb={1}>
							Email
						</Typography>
						<Typography variant="body1">
							<b>example@gmail.com</b>
						</Typography>
					</Box>
					<Divider orientation="vertical" flexItem />
					<Box>
						<Typography variant="h3" mb={1}>
							Other Web Profile
						</Typography>
						<Typography variant="body1">
							<b>https://linkedin.com/john-doe-147jfskhre/</b>
						</Typography>
						<Typography variant="body1">
							<b>https://example.portfolio.com</b>
						</Typography>
					</Box>
				</Box>
			</Box>
		</Stack>
	)
}

export default Template2
