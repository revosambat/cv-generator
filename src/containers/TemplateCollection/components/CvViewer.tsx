import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import { Fade, IconButton, styled, ThemeProvider } from "@mui/material"
import Template1 from "../templates/template1"
import { template1Theme } from "../templates/template1theme"
import CloseIcon from "@mui/icons-material/Close"

const StyledBox = styled(Box)`
	position: relative;
	left: 29.5%;
	top: 13%;
	transform: translate(-10%, -10%);
	width: 50%;
	height: 92%;
	background-color: #ffffff;
	boxshadow: 24;
	p: 4;
	overflow: scroll;
`
interface Proptypes {
	open: boolean
	handleClose: () => void
}

const CvViewer = ({ open = true, handleClose }: Proptypes) => {
	return (
		<Modal open={open}>
			<Fade in={open}>
				<StyledBox>
					<IconButton
						onClick={handleClose}
						sx={{ position: "absolute", right: 0 }}
					>
						<CloseIcon />
					</IconButton>
					<ThemeProvider theme={template1Theme}>
						<Template1 />
					</ThemeProvider>
				</StyledBox>
			</Fade>
		</Modal>
	)
}

export default CvViewer
