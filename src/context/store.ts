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
		id: number
		name: string
		level: string
		description: string
		grade: string
		startedYear: string
		passedYear: string
	}[]
	workExperience: {
		id: number
		name: string
		designation: string
		address: string
		description: string
		startYear: string
		endYear: string
	}[]
	skillHighlights: {
		id: number
		name: string
		level: string
	}[]
	projects: {
		id: number
		name: string
		startedAt: string
		endedAt: string
		tools: string[]
		description: string
	}[]
	languages: {
		id: number
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
			id: 1,
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
			id: 1,
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
			id: 1,
			name: "",
			level: "",
		},
	],
	projects: [
		{
			id: 1,
			name: "",
			startedAt: "",
			endedAt: "",
			tools: [],
			description: "",
		},
	],
	languages: [
		{
			id: 1,
			name: "",
			level: "",
		},
	],
}
