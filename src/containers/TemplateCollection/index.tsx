import React, { useContext, useState } from "react"
import { FormDataContext } from "../../context/context"
import CvViewer from "./components/CvViewer"
import { Box, Grid, Paper, styled } from "@mui/material"

const Item = styled(Paper)`
	width: 200px;
	height: 250px;
	@media only screen and (max-width: 670px) {
		width: 300px;
		height: 380px;
	}
`

const TemplateCollection = () => {
	const formContext = useContext(FormDataContext)
	const [open, setOpen] = useState(true)

	const handleModalClose = () => {
		setOpen(false)
	}
	console.log(formContext)
	return (
		<Box bgcolor={"#CFDAEE"} width={"100vw"} height={"100vh"}>
			<Box
				width={"80%"}
				height={600}
				overflow={"scroll"}
				position={"absolute"}
				top={"15%"}
				left={"16%"}
			>
				<Grid container gap={8}>
					{Array(30)
						.fill("templates")
						.map((val) => (
							<Grid item>
								<Item>{val}</Item>
							</Grid>
						))}
				</Grid>
			</Box>
			<CvViewer open={open} handleClose={handleModalClose} />
		</Box>
	)
}

export default TemplateCollection
