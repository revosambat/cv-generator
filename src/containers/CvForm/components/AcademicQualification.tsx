import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"
import Stack from "@mui/material/Stack"
import { Grid, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import CustomTextField from "../../../components/CustomTextField"
import ButtonPagination from "./ButtonPagination"

interface PropTypes {
	formData: cvDataTypes["academicQualification"]
	updateForm: (val: {
		academicQualification: cvDataTypes["academicQualification"]
	}) => void
}

const AcademicQualification = ({ formData, updateForm }: PropTypes) => {
	const [acdQua, setAcdQua] = useState({
		academicQualification: [...formData],
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {}
	const handleNext = () => {
		updateForm(acdQua)
	}
	const handlePrev = () => {}
	return (
		<Stack alignItems={"center"} justifyContent={"center"}>
			<Typography variant="h2">Academic Qualification</Typography>
			{formData.map(
				(
					{ name, level, description, grade, startedYear, passedYear },
					idx: number
				) => (
					<Grid container>
						<Grid item>
							<CustomInput
								type={"text"}
								value={name}
								handleChange={handleChange}
								name={"name"}
								placeholder={"Name of Institute"}
							/>
						</Grid>
						<Grid item>
							<CustomInput
								type={"text"}
								value={level}
								handleChange={handleChange}
								name={"level"}
								placeholder={"Field of Study"}
							/>
						</Grid>
						<Grid item>
							<CustomTextField
								value={description}
								handleChange={handleChange}
								name={"description"}
								placeholder={"Description"}
							/>
						</Grid>
						<Grid item>
							<CustomInput
								type={"text"}
								value={grade}
								handleChange={handleChange}
								name={"grade"}
								placeholder={"Grade in GPA or Percentage with unit"}
							/>
						</Grid>
						<Grid item>
							<CustomInput
								type={"date"}
								value={startedYear}
								handleChange={handleChange}
								name={"startYear"}
								placeholder={""}
							/>
						</Grid>
						<Grid item>
							<CustomInput
								type={"date"}
								value={passedYear}
								handleChange={handleChange}
								name={"passedYear"}
								placeholder={""}
							/>
						</Grid>
						<ButtonPagination handlePrev={handlePrev} handleNext={handleNext} />
					</Grid>
				)
			)}
		</Stack>
	)
}

export default AcademicQualification
