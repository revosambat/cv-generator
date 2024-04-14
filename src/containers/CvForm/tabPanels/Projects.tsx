import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"
import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import ButtonPagination from "../components/ButtonPagination"
import CustomTextField from "../../../components/CustomTextField"
import CustomButton from "../../../components/CustomButton"
import FormDivider from "../components/FormDivider"

interface PropTypes {
	formData: cvDataTypes["projects"]
	updateForm: (val: { projects: cvDataTypes["projects"] }) => void
	tabChange: (val: number) => void
}

const Projects = ({ formData, updateForm, tabChange }: PropTypes) => {
	const [proj, setProj] = useState({
		projects: [...formData],
	})
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		i: number
	) => {
		let newProj = proj.projects.map((item, _idx) => {
			if (item.id == i) {
				return { ...item, [event.target.name]: event.target.value }
			} else {
				return item
			}
		})
		setProj({
			projects: newProj,
		})
	}
	const handleNext = () => {
		updateForm(proj)
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}
	const handleAdd = () => {
		let newProject = {
			id: proj.projects[proj.projects.length - 1].id + 1,
			name: "",
			startedAt: "",
			endedAt: "",
			tools: [],
			description: "",
		}
		setProj((prevState) => ({
			projects: [...prevState.projects, newProject],
		}))
	}
	const handleRemove = (i: number) => {
		let filteredProj = proj.projects.filter(({ id }, idx) => id !== i)
		setProj({
			projects: filteredProj,
		})
	}
	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>Projects</Divider>
			</Typography>
			<Box width={"100%"} height={500} overflow={"scroll"}>
				{proj.projects.map(
					(
						{ id, name, startedAt, endedAt, tools, description },
						idx: number
					) => (
						<Grid container key={id} mb={5} rowGap={3} columnGap={15}>
							<Grid item md={5}>
								<CustomInput
									type={"text"}
									value={name}
									handleChange={(e) => handleChange(e, id)}
									name={"name"}
									placeholder={"Project's name"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={startedAt}
									handleChange={(e) => handleChange(e, id)}
									name={"startedAt"}
									placeholder={"Project Started At"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomInput
									type={"date"}
									value={endedAt}
									handleChange={(e) => handleChange(e, id)}
									name={"endedAt"}
									placeholder={"Project Ended At"}
								/>
							</Grid>
							<Grid item md={5}>
								<CustomTextField
									value={description}
									handleChange={(e) => handleChange(e, id)}
									name={"description"}
									placeholder={"Describe the work"}
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
			<ButtonPagination handleNext={handleNext} handlePrev={handlePrev} />
		</>
	)
}

export default Projects
