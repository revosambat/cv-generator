import React, { useState } from "react"
import CustomInput from "../../../components/CustomInput"
import { cvDataTypes } from "../../../context/store"
import { Box, Divider, Grid, Typography } from "@mui/material"
import ButtonPagination from "../components/ButtonPagination"
import FormDivider from "../components/FormDivider"

interface PropTypes {
	formData: cvDataTypes["generalInformation"]
	updateForm: (val: {
		generalInformation: cvDataTypes["generalInformation"]
	}) => void
	tabChange: (val: number) => void
}
const GeneralInformation = ({ formData, updateForm, tabChange }: PropTypes) => {
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
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}

	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>General Information</Divider>
			</Typography>
			<Box height={540}>
				<Grid container overflow={"scroll"} rowGap={3} columnGap={15}>
					<Grid item md={5}>
						<CustomInput
							type={"text"}
							value={formData.firstName}
							handleChange={handleChange}
							name={"firstName"}
							placeholder={"First Name"}
						/>
					</Grid>
					<Grid item md={5}>
						<CustomInput
							type={"text"}
							value={formData.lastName}
							handleChange={handleChange}
							name={"lastName"}
							placeholder={"Last Name"}
						/>
					</Grid>
					<Grid item xs={8} md={5}>
						<CustomInput
							type={"text"}
							value={formData.address}
							handleChange={handleChange}
							name={"address"}
							placeholder={"Full Address"}
						/>
					</Grid>
					<Grid item xs={8} md={5}>
						<CustomInput
							type={"email"}
							value={formData.email}
							handleChange={handleChange}
							name={"email"}
							placeholder={"Email"}
						/>
					</Grid>
					<Grid item xs={8} md={5}>
						<CustomInput
							type={"number"}
							value={formData.contact}
							handleChange={handleChange}
							name={"contact"}
							placeholder={"Contact no."}
						/>
					</Grid>
					<Grid item xs={8} md={5}>
						<CustomInput
							type={"text"}
							value={formData.linkedInProfile}
							handleChange={handleChange}
							name={"linkedInProfile"}
							placeholder={"LinkedIn Profile Link"}
						/>
					</Grid>
					<Grid item xs={8} md={5}>
						<CustomInput
							type={"text"}
							value={formData.portfolioProfile}
							handleChange={handleChange}
							name={"portfolioProfile"}
							placeholder={"Portfolio Profile Link"}
						/>
					</Grid>
					<Grid item md={12}>
						<FormDivider idx={0} />
					</Grid>
				</Grid>
			</Box>
			<ButtonPagination handlePrev={handlePrev} handleNext={handleNext} />
		</>
	)
}

export default GeneralInformation
