import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import CustomTextField from "../../../components/CustomTextField"
import ButtonPagination from "../components/ButtonPagination"
import CustomButton from "../../../components/CustomButton"
import DeleteIcon from "@mui/icons-material/Delete"
import FormDivider from "../components/FormDivider"

interface PropTypes {
	formData: cvDataTypes["workExperience"]
	updateForm: (val: { workExperience: cvDataTypes["workExperience"] }) => void
	tabChange: (val: number) => void
}

const WorkExperience = ({ formData, updateForm, tabChange }: PropTypes) => {
	const [workExp, setWordExp] = useState({
		workExperience: [...formData],
	})
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		i: number
	) => {
		let newWorkExp = workExp.workExperience.map((item, _idx) => {
			if (item.id === i) {
				return { ...item, [event.target.name]: event.target.value }
			} else {
				return item
			}
		})
		setWordExp({
			workExperience: newWorkExp,
		})
	}

	const handleNext = () => {
		updateForm(workExp)
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}

	const handleAdd = () => {
		let newWorkExperience = {
			id: workExp.workExperience[workExp.workExperience.length - 1].id + 1,
			name: "",
			designation: "",
			address: "",
			description: "",
			startYear: "",
			endYear: "",
		}
		setWordExp((prevState) => ({
			workExperience: [...prevState.workExperience, newWorkExperience],
		}))
	}
	const handleRemove = (i: number) => {
		let filteredWorkExp = workExp.workExperience.filter(
			({ id }, idx) => id !== i
		)
		setWordExp({
			workExperience: filteredWorkExp,
		})
	}
	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>Work Experience</Divider>
			</Typography>
			<Box width={"100%"} height={500} overflow={"scroll"}>
				{workExp.workExperience.map(
					(
						{ id, name, description, address, designation, startYear, endYear },
						idx: number
					) => (
						<Grid
							container
							key={id}
							mb={5}
							rowGap={3}
							columnGap={15}
							position={"relative"}
						>
							{/* key needs to be change rather than index */}
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={name}
									handleChange={(e) => handleChange(e, id)}
									name={"name"}
									placeholder={"Name of Company"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={address}
									handleChange={(e) => handleChange(e, id)}
									name={"address"}
									placeholder={"Full Address of Company"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={designation}
									handleChange={(e) => handleChange(e, id)}
									name={"designation"}
									placeholder={"Designation"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomTextField
									value={description}
									handleChange={(e) => handleChange(e, id)}
									name={"description"}
									placeholder={"Describle the role"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={startYear}
									handleChange={(e) => handleChange(e, id)}
									name={"startYear"}
									placeholder={"Started Year"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={endYear}
									handleChange={(e) => handleChange(e, id)}
									name={"endYear"}
									placeholder={"End Year"}
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

export default WorkExperience
