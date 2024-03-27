import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { MouseEventHandler } from "react"

const StyledButton = styled(Button)`
	color: "#1E1E1E";
	font-family: Sansita;
	font-style: italic;
	width: 100px;
	height: 50px;
	border-radius: 12%;
	font-weight: 700;
	box-shadow: 0px 6px 14px -3px #616161;
`
interface PropTypes {
	text: string
	handleClick: undefined | MouseEventHandler<HTMLButtonElement>
}
const CustomButton = ({ text, handleClick }: PropTypes) => {
	return (
		<StyledButton variant="contained" onClick={handleClick}>
			{text}
		</StyledButton>
	)
}

export default CustomButton
