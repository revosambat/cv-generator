import { useContext, useRef, useState } from "react"
import { FormDataContext } from "../../context/context"
import CvViewer from "./components/CvViewer"
import { Box, Paper, styled, IconButton, Typography } from "@mui/material"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"

const Item = styled(Paper)`
	min-width: 200px;
	height: 250px;
	margin: auto;
	&:hover {
		transition: all 300ms ease-in;
		transform: scale(1.2);
		opacity: 1;
		box-shadow: 2px 4px 5px 0px #5b7492;
	}
`

const TemplateCollection = () => {
	const formContext = useContext(FormDataContext)
	const [open, setOpen] = useState(true)
	const scrollRef = useRef<HTMLElement>(null)

	const handleModalClose = () => {
		setOpen(false)
	}

	const handleScroll = (offset: number) => {
		if (scrollRef.current) {
			scrollRef.current.scrollLeft += offset
		}
	}
	console.log(formContext)
	return (
		<Box
			width={"100vw"}
			height={"100vh"}
			display={"flex"}
			flexDirection={"column"}
			p={10}
		>
			<Typography variant="h1" textAlign={"left"} p={5}>
				Choose your template!
			</Typography>
			<Box
				width={"100%"}
				display={"flex"}
				bgcolor={"#CFDAEE"}
				borderRadius={10}
			>
				<Box
					display={"flex"}
					flex={0.5}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<IconButton onClick={() => handleScroll(-210)}>
						<ArrowCircleLeftIcon fontSize="large" />
					</IconButton>
				</Box>
				<Box
					display={"flex"}
					flexWrap={"nowrap"}
					overflow={"scroll"}
					ref={scrollRef}
					sx={{ scrollBehavior: "smooth" }}
					justifyContent={"space-between"}
					gap={8}
					flex={2.5}
					p={10}
				>
					{Array(10)
						.fill("templates")
						.map((val) => (
							<Item>{val}</Item>
						))}
				</Box>
				<Box
					display={"flex"}
					flex={0.5}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<IconButton onClick={() => handleScroll(+210)}>
						<ArrowCircleRightIcon fontSize="large" />
					</IconButton>
				</Box>
			</Box>
			<Box p={5}>
				<Typography variant="body2" textAlign={"justify"}>
					<strong>Introducing our CV Generator:</strong> The hassle-free
					solution for crafting professional resumes. With our user-friendly
					interface, you can effortlessly create your perfect CV in minutes.
					Simply input your information, select from a variety of sleek
					templates tailored to your industry, and customize to your heart's
					content. Once you're satisfied, choose to print, download, or view
					your CV online. Say goodbye to the stress of formatting – with our CV
					Generator, landing your dream job just got a whole lot easier.
				</Typography>
			</Box>
			<CvViewer open={open} handleClose={handleModalClose} />
		</Box>
	)
}

export default TemplateCollection
