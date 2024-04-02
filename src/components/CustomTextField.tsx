import { TextField } from "@mui/material"
import React from "react"

interface PropTypes {
	value: string
	handleChange:
		| React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined
	name: string
	placeholder: string
}
const CustomTextField = ({
	value,
	handleChange,
	name,
	placeholder,
}: PropTypes) => {
	return (
		<TextField
			defaultValue={value}
			onChange={handleChange}
			name={name}
			placeholder={placeholder}
			multiline
			rows={5}
		/>
	)
}

export default CustomTextField
