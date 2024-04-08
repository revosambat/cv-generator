import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import ButtonPagination from "../components/ButtonPagination"
import CustomButton from "../../../components/CustomButton"
import FormDivider from "../components/FormDivider"

interface PropTypes {
	formData: cvDataTypes["skillHighlights"]
	updateForm: (val: { skillHighlights: cvDataTypes["skillHighlights"] }) => void
	tabChange: (val: number) => void
}

const SkillHighlights = ({ formData, updateForm, tabChange }: PropTypes) => {
	const [skillHigh, setSkillHigh] = useState({
		skillHighlights: [...formData],
	})

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		i: number
	) => {
		let newSkillHigh = skillHigh.skillHighlights.map((item, idx) => {
			if (item.id == i) {
				return { ...item, [event.target.name]: event.target.value }
			} else {
				return item
			}
		})
		setSkillHigh({
			skillHighlights: newSkillHigh,
		})
	}
	const handleNext = () => {
		updateForm(skillHigh)
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}

	const handleAdd = () => {
		let newSkillHighlights = {
			id:
				skillHigh.skillHighlights[skillHigh.skillHighlights.length - 1].id + 1,
			name: "",
			level: "",
		}
		setSkillHigh((prevState) => ({
			skillHighlights: [...prevState.skillHighlights, newSkillHighlights],
		}))
	}

	const handleRemove = (i: number) => {
		let filteredSkillHigh = skillHigh.skillHighlights.filter(
			({ id }, idx) => id !== i
		)
		setSkillHigh({
			skillHighlights: filteredSkillHigh,
		})
	}
	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>Skill Highlights</Divider>
			</Typography>
			<Box width={"100%"} height={500} overflow={"scroll"}>
				{skillHigh.skillHighlights.map(({ id, name, level }, idx: number) => (
					<Grid container key={id} mb={5} rowGap={3} columnGap={15}>
						<Grid item md={5}>
							<CustomInput
								type={"text"}
								value={name}
								handleChange={(e) => handleChange(e, id)}
								name={"name"}
								placeholder={"Technology Name"}
							/>
						</Grid>
						<Grid item md={5}>
							<CustomInput
								type={"text"}
								value={level}
								handleChange={(e) => handleChange(e, id)}
								name={"level"}
								placeholder={"Level out of 10"}
							/>
						</Grid>
						<Grid item md={12}>
							<FormDivider idx={idx} id={id} handleRemove={handleRemove} />
						</Grid>
					</Grid>
				))}
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

export default SkillHighlights
