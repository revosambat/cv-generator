export interface cvDataTypes {
	activeFormSlug: string
	generalInformation: {
		firstName: string
		lastName: string
		email: string
		linkedInProfile: string
		portfolioProfile: string
		contact: string
		address: string
	}
	academicQualification: {
		name: string
		level: string
		description: string
		grade: string
		startedYear: string
		passedYear: string
	}[]
	workExperience: {
		name: string
		designation: string
		address: string
		description: string
		startYear: string
		endYear: string
	}[]
	skillHighlights: {
		name: string
		level: string
	}[]
	projects: {
		name: string
		startedAt: string
		endedAt: string
		tools: string[]
		description: string
	}[]
	languages: {
		name: string
		level: string
	}[]
}
export const cvData: cvDataTypes = {
	activeFormSlug: "GenInfo",
	generalInformation: {
		firstName: "",
		lastName: "",
		email: "",
		linkedInProfile: "",
		portfolioProfile: "",
		contact: "",
		address: "",
	},
	academicQualification: [
		{
			name: "",
			level: "",
			description: "",
			grade: "",
			startedYear: "",
			passedYear: "",
		},
	],
	workExperience: [
		{
			name: "",
			designation: "",
			address: "",
			description: "",
			startYear: "",
			endYear: "",
		},
	],
	skillHighlights: [
		{
			name: "",
			level: "",
		},
	],
	projects: [
		{
			name: "",
			startedAt: "",
			endedAt: "",
			tools: [],
			description: "",
		},
	],
	languages: [
		{
			name: "",
			level: "",
		},
	],
}
