import OutlinedInput from "@mui/material/OutlinedInput"
import React from "react"
import { styled } from "@mui/material"

const StyledInput = styled(OutlinedInput)`
	background-color: white;
	color: #5b7492;
	width: 100%;
	&:hover {
		box-shadow: 0px 6px 14px -3px #616161;
	}
`

interface PropTypes {
	type: string
	value: string
	handleChange:
		| React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined
	name: string
	placeholder: string
}
const CustomInput = ({
	type,
	value,
	handleChange,
	name,
	placeholder,
}: PropTypes) => {
	return (
		<StyledInput
			type={type}
			defaultValue={value}
			name={name}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default CustomInput
