import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import InfoIcon from "@mui/icons-material/Info"

interface PropTypes {
	idx: number
	id: number
	handleRemove?: (idx: number) => void
}
const FormDivider = ({ idx, id, handleRemove }: PropTypes) => {
	return idx !== 0 ? (
		<Divider>
			<IconButton
				aria-label="delete"
				size="large"
				onClick={() => handleRemove && handleRemove(id)}
				sx={{ backgroundColor: "white" }}
			>
				<DeleteIcon fontSize="inherit" color="primary" />
			</IconButton>
		</Divider>
	) : (
		<Divider>
			<IconButton
				aria-label="null"
				size="large"
				sx={{ backgroundColor: "white" }}
			>
				<InfoIcon fontSize="inherit" color="primary" />
			</IconButton>
		</Divider>
	)
}

export default FormDivider
