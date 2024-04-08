import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { MouseEventHandler } from "react"

const StyledButton = styled(Button)`
	font-family: Sansita;
	font-style: italic;
	width: 110px;
	height: 50px;
	font-weight: 700;
	box-shadow: 0px 6px 14px -3px #616161;
`
interface PropTypes {
	text: string
	handleClick: undefined | MouseEventHandler<HTMLButtonElement>
	sx?: { width: string }
}
const CustomButton = ({ text, handleClick, sx }: PropTypes) => {
	return (
		<StyledButton
			variant="contained"
			onClick={handleClick}
			color="info"
			sx={sx}
		>
			{text}
		</StyledButton>
	)
}

export default CustomButton
