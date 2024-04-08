import React, { useState } from "react"
import { cvDataTypes } from "../../../context/store"
import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import CustomInput from "../../../components/CustomInput"
import ButtonPagination from "../components/ButtonPagination"
import CustomButton from "../../../components/CustomButton"
import FormDivider from "../components/FormDivider"

interface PropTypes {
	formData: cvDataTypes["languages"]
	updateForm: (val: { languages: cvDataTypes["languages"] }) => void
	tabChange: (val: number) => void
}
const Languages = ({ formData, updateForm, tabChange }: PropTypes) => {
	const [lang, setLang] = useState({
		languages: [...formData],
	})
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		i: number
	) => {
		let newLang = lang.languages.map((item, _idx) => {
			if (item.id === i) {
				return { ...item, [event.target.name]: event.target.value }
			} else {
				return item
			}
		})
		setLang({
			languages: newLang,
		})
	}
	const handleNext = () => {
		updateForm(lang)
		tabChange(1)
	}
	const handlePrev = () => {
		tabChange(-1)
	}
	const handleAdd = () => {
		let newLanguage = {
			id: lang.languages[lang.languages.length - 1].id + 1,
			name: "",
			level: "",
		}
		setLang((prevState) => ({
			languages: [...prevState.languages, newLanguage],
		}))
	}
	const handleRemove = (i: number) => {
		let filteredLang = lang.languages.filter(({ id }, idx) => id !== i)
		setLang({
			languages: filteredLang,
		})
	}

	return (
		<>
			<Typography mb={5} variant="h2">
				<Divider>Languages</Divider>
			</Typography>
			<Box width={"100%"} height={500} overflow={"scroll"}>
				{lang.languages.map(({ id, name, level }, idx: number) => (
					<Grid container key={id} mb={5} rowGap={3} columnGap={15}>
						<Grid item md={5}>
							<CustomInput
								type={"text"}
								value={name}
								handleChange={(e) => handleChange(e, id)}
								name={"name"}
								placeholder={"Language Name"}
							/>
						</Grid>
						<Grid item md={5}>
							<CustomInput
								type={"text"}
								value={level}
								handleChange={(e) => handleChange(e, id)}
								name={"level"}
								placeholder={"Proficiecy Level"}
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

export default Languages
