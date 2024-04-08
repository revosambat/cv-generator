import { useContext } from "react"
import { FormDataContext } from "../../context/context"
import GeneralInformation from "./tabPanels/GeneralInformation"
import AcademicQualification from "./tabPanels/AcademicQualification"
import WorkExperience from "./tabPanels/WorkExperience"
import SkillHighlights from "./tabPanels/SkillHighlights"
import Projects from "./tabPanels/Projects"
import Languages from "./tabPanels/Languages"
import { CVHeaderData } from "../../contants"
import { Box } from "@mui/material"
import { cvDataTypes } from "../../context/store"

const CvForm = () => {
	const formContext = useContext(FormDataContext)
	if (!formContext) return null
	const { initData, dispatch } = formContext
	const {
		activeFormSlug,
		generalInformation,
		academicQualification,
		projects,
		skillHighlights,
		workExperience,
		languages,
	} = initData
	const handleSubmit = (): void => {}
	const updateForm = (
		updatedData:
			| { activeFormSlug: cvDataTypes["activeFormSlug"] }
			| {
					generalInformation: cvDataTypes["generalInformation"]
			  }
			| {
					academicQualification: cvDataTypes["academicQualification"]
			  }
			| {
					workExperience: cvDataTypes["workExperience"]
			  }
			| {
					projects: cvDataTypes["projects"]
			  }
			| {
					languages: cvDataTypes["languages"]
			  }
			| {
					skillHighlights: cvDataTypes["skillHighlights"]
			  }
	) => {
		dispatch({
			type: "onUpdate",
			payload: { ...updatedData },
		})
	}
	const tabChange = (changeFlag: number) => {
		const totalIdx = CVHeaderData.length - 1
		// const {activeFormSlug} = initData
		let activeSlugIdx = CVHeaderData.findIndex(
			({ slug }) => slug == initData.activeFormSlug
		)
		activeSlugIdx = activeSlugIdx + changeFlag
		if (activeSlugIdx < 0) {
			activeSlugIdx = 0
		}
		if (activeSlugIdx > totalIdx) {
			return
		}
		dispatch({
			type: "onSelect",
			payload: {
				activeFormSlug: CVHeaderData[activeSlugIdx].slug,
			},
		})
	}
	return (
		<Box padding={5} height={"100%"} width={"100%"}>
			<form onSubmit={handleSubmit}>
				{activeFormSlug === "GenInfo" && (
					<GeneralInformation
						formData={generalInformation}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
				{activeFormSlug === "AcdQua" && (
					<AcademicQualification
						formData={academicQualification}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
				{activeFormSlug === "WorkExp" && (
					<WorkExperience
						formData={workExperience}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
				{activeFormSlug === "SkillHigh" && (
					<SkillHighlights
						formData={skillHighlights}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
				{activeFormSlug === "Proj" && (
					<Projects
						formData={projects}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
				{activeFormSlug === "Lang" && (
					<Languages
						formData={languages}
						updateForm={updateForm}
						tabChange={tabChange}
					/>
				)}
			</form>
		</Box>
	)
}

export default CvForm
