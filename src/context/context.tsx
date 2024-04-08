import { createContext, Dispatch, ReducerAction, useReducer } from "react"

import { cvData, cvDataTypes } from "./store"

export const FormDataContext = createContext<{
	initData: cvDataTypes
	dispatch: Dispatch<ReducerAction<typeof formDataReducer>>
} | null>(null)

interface PropTypes {
	children: JSX.Element
}
export default function FormProvider({ children }: PropTypes) {
	const [initData, dispatch] = useReducer(formDataReducer, cvData)
	const value = { initData, dispatch }

	return (
		<FormDataContext.Provider value={value}>
			{children}
		</FormDataContext.Provider>
	)
}

function formDataReducer(
	data: cvDataTypes,
	action: {
		type: string
		payload:
			| { activeFormSlug: cvDataTypes["activeFormSlug"] }
			| { generalInformation: cvDataTypes["generalInformation"] }
			| { academicQualification: cvDataTypes["academicQualification"] }
			| { workExperience: cvDataTypes["workExperience"] }
			| { projects: cvDataTypes["projects"] }
			| { languages: cvDataTypes["languages"] }
			| { skillHighlights: cvDataTypes["skillHighlights"] }
	}
): cvDataTypes {
	switch (action.type) {
		case "onUpdate":
		case "onSelect":
			return { ...data, ...action.payload }
		default:
			return data
	}
}
