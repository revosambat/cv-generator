import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"

import { Box, Divider, Grid, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import CustomTextField from "../../../components/CustomTextField"
import ButtonPagination from "../components/ButtonPagination"
import CustomButton from "../../../components/CustomButton"
import FormDivider from "../components/FormDivider"
interface PropTypes {
	formData: cvDataTypes["academicQualification"]
	updateForm: (val: {
		academicQualification: cvDataTypes["academicQualification"]
	}) => void
	tabChange: (val: number) => void
}

const AcademicQualification = ({
	formData,
	updateForm,
	tabChange,
}: PropTypes) => {
	const [acdQua, setAcdQua] = useState({
		academicQualification: [...formData],
	})
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		i: number
	) => {
		let newAcdQua = acdQua.academicQualification.map((item, _idx) => {
			if (item.id === i) {
				return { ...item, [event.target.name]: event.target.value }
			} else {
				return item
			}
		})
		setAcdQua({
			academicQualification: newAcdQua,
		})
	}
	const handleNext = () => {
		updateForm(acdQua)
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}
	const handleAdd = () => {
		let newAcademicQualification = {
			id:
				acdQua.academicQualification[acdQua.academicQualification.length - 1]
					.id + 1,
			name: "",
			level: "",
			description: "",
			grade: "",
			startedYear: "",
			passedYear: "",
		}
		setAcdQua((prevState) => ({
			academicQualification: [
				...prevState.academicQualification,
				newAcademicQualification,
			],
		}))
	}
	const handleRemove = (i: number) => {
		let filteredAcdQua = acdQua.academicQualification.filter(
			({ id }, _idx) => id !== i
		)
		setAcdQua({
			academicQualification: filteredAcdQua,
		})
	}
	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>Academic Qualification</Divider>
			</Typography>
			<Box width={"100%"} height={500} overflow={"scroll"}>
				{acdQua.academicQualification.map(
					(
						{ id, name, level, description, grade, startedYear, passedYear },
						idx: number
					) => (
						<Grid container key={id} mb={5} rowGap={3} columnGap={15}>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={name}
									handleChange={(e) => handleChange(e, id)}
									name={"name"}
									placeholder={"Name of Institute"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={level}
									handleChange={(e) => handleChange(e, id)}
									name={"level"}
									placeholder={"Field of Study"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomTextField
									value={description}
									handleChange={(e) => handleChange(e, id)}
									name={"description"}
									placeholder={"Description"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={grade}
									handleChange={(e) => handleChange(e, id)}
									name={"grade"}
									placeholder={"Grade in GPA or Percentage with unit"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={startedYear}
									handleChange={(e) => handleChange(e, id)}
									name={"startedYear"}
									placeholder={""}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={passedYear}
									handleChange={(e) => handleChange(e, id)}
									name={"passedYear"}
									placeholder={""}
								/>
							</Grid>
							<Grid item md={12}>
								<FormDivider idx={idx} id={id} handleRemove={handleRemove} />
							</Grid>
						</Grid>
					)
				)}
			</Box>
			<CustomButton
				text={"Add More"}
				handleClick={handleAdd}
				sx={{ width: "100%" }}
			/>
			<ButtonPagination handlePrev={handlePrev} handleNext={handleNext} />
		</>
	)
}

export default AcademicQualification
