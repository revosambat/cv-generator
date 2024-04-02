import OutlinedInput from "@mui/material/OutlinedInput"
import React from "react"

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
		<OutlinedInput
			type={type}
			defaultValue={value}
			name={name}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default CustomInput
