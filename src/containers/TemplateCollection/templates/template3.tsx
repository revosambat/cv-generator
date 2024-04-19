import { Box, Chip, Grid, Stack, Typography } from "@mui/material"
import { MutableRefObject } from "react"

const Template3 = ({
	exportRef,
}: {
	exportRef: MutableRefObject<HTMLDivElement | null>
}) => {
	return (
		<Stack
			sx={{ background: "linear-gradient( to right bottom, #d7ccc8, #bcaaa4)" }}
			ref={exportRef}
			flexDirection={"column"}
			p={5}
		>
			<Box pb={2} borderBottom={"1px solid #212121"}>
				<Typography variant="h1" mb={2}>
					<i>John Doe</i>
				</Typography>
				<Typography variant="h2">Desgination</Typography>
			</Box>
			<Box
				pt={3}
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				mb={2}
			>
				<Typography flex={1} variant="h3">
					Contact
				</Typography>
				<Box flex={2}>
					<Typography variant="body1">
						<b>
							example@gmail.com • 234-222-3434 • Full Address, City, Country
						</b>
					</Typography>
					<Typography variant="body1">
						<i>
							https://linkedin.com/john-doe-147jfskhre/ |
							https://example.portfolio.com
						</i>
					</Typography>
					<Typography variant="body1"></Typography>
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				pb={2}
				mb={2}
				borderBottom={"1px solid #212121"}
			>
				<Typography flex={1} variant="h3">
					Profile
				</Typography>
				<Typography flex={2} variant="body1" textAlign={"justify"}>
					<b>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					</b>
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				pb={2}
				mb={2}
				borderBottom={"1px solid #212121"}
			>
				<Typography flex={1} variant="h3">
					Experience
				</Typography>
				<Grid container spacing={2} flex={2}>
					<Grid item xs={6}>
						<Box>
							<Typography variant="h3">Desgination</Typography>
							<Typography variant="body1">
								<i>Company Name, Company Address</i>
							</Typography>
							<Typography variant="body1" mb={1}>
								<strong>month, Start year - month, End year</strong>
							</Typography>
							<Typography variant="body1" textAlign={"justify"}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box>
							<Typography variant="h3">Desgination</Typography>
							<Typography variant="body1">
								<i>Company Name, Company Address</i>
							</Typography>
							<Typography variant="body1" mb={1}>
								<strong>month, Start year - month, End year</strong>
							</Typography>
							<Typography variant="body1" textAlign={"justify"}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				pb={2}
				mb={2}
				borderBottom={"1px solid #212121"}
			>
				<Typography flex={1} variant="h3">
					Education
				</Typography>
				<Grid container spacing={2} flex={2}>
					<Grid item xs={6}>
						<Box>
							<Typography variant="h3">Passed Year</Typography>
							<Typography variant="body1">
								<i>University/Institute Name, Address</i>
							</Typography>
							<Typography variant="body1" mb={1}>
								<strong>Field of Study</strong>
							</Typography>
							<Typography variant="body1" textAlign={"justify"}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				pb={2}
				mb={2}
				borderBottom={"1px solid #212121"}
			>
				<Typography flex={1} variant="h3">
					Project
				</Typography>
				<Box display={"flex"} flex={2} gap={3} flexDirection={"column"}>
					<Box>
						<Typography variant="h3">Project Name</Typography>
						<Typography variant="body1">
							<i>Start Year - End Year</i>
						</Typography>
						<Typography variant="body1" textAlign={"justify"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent={"space-between"}
				flexDirection={"row"}
				pb={2}
				mb={2}
				gap={3}
			>
				<Box
					display="flex"
					justifyContent={"space-between"}
					flexDirection={"row"}
					flex={1}
					gap={5}
				>
					<Typography flex={1} variant="h3">
						Skills
					</Typography>
					<Box
						flex={2}
						display={"flex"}
						flexDirection={"row"}
						flexWrap={"wrap"}
						gap={2}
					>
						<Chip label={"React"} color="success" variant="outlined" />
						<Chip label={"React Native"} color="success" variant="outlined" />
						<Chip label={"Javascript"} color="primary" variant="outlined" />
					</Box>
				</Box>
				<Box
					display="flex"
					justifyContent={"space-between"}
					flexDirection={"row"}
					flex={1}
					gap={5}
				>
					<Typography flex={1} variant={"h3"}>
						Languages
					</Typography>
					<Box
						display={"flex"}
						flexWrap={"wrap"}
						flexDirection={"row"}
						gap={2}
						flex={2}
					>
						<Chip label={"English"} color="success" variant="outlined" />
						<Chip label={"Hindi"} color="primary" variant="outlined" />
						<Chip label={"Nepali"} color="success" variant="outlined" />
					</Box>
				</Box>
			</Box>
		</Stack>
	)
}

export default Template3
