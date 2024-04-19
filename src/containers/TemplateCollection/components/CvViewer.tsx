import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import { Fade, IconButton, styled, ThemeProvider } from "@mui/material"
import Template1 from "../templates/template1"
import { template1Theme } from "../templates/themes/template1theme"
import CloseIcon from "@mui/icons-material/Close"
import DownloadIcon from "@mui/icons-material/Download"
import { template2Theme } from "../templates/themes/template2theme"
import Template2 from "../templates/template2"
import { MutableRefObject } from "react"
import { template3Theme } from "../templates/themes/template3theme"
import Template3 from "../templates/template3"

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
	handleDownload: () => void
	exportRef: MutableRefObject<HTMLDivElement | null>
	activeTemplate: string
}

const CvViewer = ({
	open = true,
	exportRef,
	handleClose,
	handleDownload,
	activeTemplate,
}: Proptypes) => {
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
					<IconButton
						onClick={handleDownload}
						sx={{ position: "absolute", right: "5%" }}
					>
						<DownloadIcon />
					</IconButton>
					{activeTemplate == "temp1" && (
						<ThemeProvider theme={template1Theme}>
							<Template1 exportRef={exportRef} />
						</ThemeProvider>
					)}
					{activeTemplate == "temp2" && (
						<ThemeProvider theme={template2Theme}>
							<Template2 exportRef={exportRef} />
						</ThemeProvider>
					)}
					{activeTemplate == "temp3" && (
						<ThemeProvider theme={template3Theme}>
							<Template3 exportRef={exportRef} />
						</ThemeProvider>
					)}
				</StyledBox>
			</Fade>
		</Modal>
	)
}

export default CvViewer
