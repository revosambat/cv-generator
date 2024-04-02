import React, { useState } from "react"
import CustomInput from "../../../components/CustomInput"
import { cvDataTypes } from "../../../context/store"
import Grid from "@mui/material/Grid"
import CustomButton from "../../../components/CustomButton"
import { Stack, Typography } from "@mui/material"
import ButtonPagination from "./ButtonPagination"

interface PropTypes {
	formData: cvDataTypes["generalInformation"]
	updateForm: (val: {
		generalInformation: cvDataTypes["generalInformation"]
	}) => void
}
const GeneralInformation = ({ formData, updateForm }: PropTypes) => {
	const [genInfo, setGenInfo] = useState({
		generalInformation: { ...formData },
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGenInfo({
			generalInformation: {
				...genInfo.generalInformation,
				[event.target.name]: event.target.value,
			},
		})
	}

	const handleNext = () => {
		updateForm(genInfo)
	}
	const handlePrev = () => {}

	return (
		<Stack alignItems={"center"} justifyContent={"center"}>
			<Typography variant="h2">General Information</Typography>
			<Grid container>
				<Grid item xs={12} md={8}>
					<CustomInput
						type={"text"}
						value={formData.firstName}
						handleChange={handleChange}
						name={"firstName"}
						placeholder={"First Name"}
					/>
					<CustomInput
						type={"text"}
						value={formData.lastName}
						handleChange={handleChange}
						name={"lastName"}
						placeholder={"Last Name"}
					/>
				</Grid>
				<Grid item>
					<CustomInput
						type={"text"}
						value={formData.address}
						handleChange={handleChange}
						name={"address"}
						placeholder={"Full Address"}
					/>
					<CustomInput
						type={"email"}
						value={formData.email}
						handleChange={handleChange}
						name={"email"}
						placeholder={"Email"}
					/>
				</Grid>
				<Grid item>
					<CustomInput
						type={"number"}
						value={formData.contact}
						handleChange={handleChange}
						name={"contact"}
						placeholder={"Contact no."}
					/>
					<CustomInput
						type={"text"}
						value={formData.linkedInProfile}
						handleChange={handleChange}
						name={"linkedInProfile"}
						placeholder={"LinkedIn Profile Link"}
					/>
				</Grid>
				<Grid item>
					<CustomInput
						type={"text"}
						value={formData.portfolioProfile}
						handleChange={handleChange}
						name={"portfolioProfile"}
						placeholder={"Portfolio Profile Link"}
					/>
				</Grid>
				<ButtonPagination handlePrev={handlePrev} handleNext={handleNext} />
			</Grid>
		</Stack>
	)
}

export default GeneralInformation
