import { useContext } from "react"
import { FormDataContext } from "../../context/context"
import GeneralInformation from "./components/GeneralInformation"
import AcademicQualification from "./components/AcademicQualification"
import WorkExperience from "./components/WorkExperience"
import SkillHighlights from "./components/SkillHighlights"
import Projects from "./components/Projects"
import Languages from "./components/Languages"
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
			| { generalInformation: cvDataTypes["generalInformation"] }
			| { academicQualification: cvDataTypes["academicQualification"] }
			| { workExperience: cvDataTypes["workExperience"] }
			| { skillHighlights: cvDataTypes["skillHighlights"] }
			| { projects: cvDataTypes["projects"] }
			| { languages: cvDataTypes["languages"] }
	) => {
		dispatch({
			type: "onUpdate",
			payload: { ...initData, ...updatedData },
		})
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				{activeFormSlug === "GenInfo" && (
					<GeneralInformation
						formData={generalInformation}
						updateForm={updateForm}
					/>
				)}
				{activeFormSlug === "AcdQua" && (
					<AcademicQualification
						formData={academicQualification}
						updateForm={updateForm}
					/>
				)}
				{activeFormSlug === "WorkExp" && (
					<WorkExperience formData={workExperience} updateForm={updateForm} />
				)}
				{activeFormSlug === "SkillHigh" && (
					<SkillHighlights formData={skillHighlights} updateForm={updateForm} />
				)}
				{activeFormSlug === "Proj" && (
					<Projects formData={projects} updateForm={updateForm} />
				)}
				{activeFormSlug === "Lang" && (
					<Languages formData={languages} updateForm={updateForm} />
				)}
			</form>
		</>
	)
}

export default CvForm
