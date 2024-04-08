import { useContext } from "react"
import { TabContext, TabList } from "@mui/lab"
import { Tab } from "@mui/material"
import { CVHeaderData } from "../../../contants"
import { FormDataContext } from "../../../context/context"

const CVHeaderList = () => {
	const formContext = useContext(FormDataContext)
	if (!formContext) return null
	const { initData, dispatch } = formContext
	const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
		dispatch({
			type: "onSelect",
			payload: { ...initData, activeFormSlug: newValue },
		})
	}
	return (
		<TabContext value={initData.activeFormSlug}>
			<TabList
				orientation="vertical"
				onChange={handleChange}
				sx={{ borderTopLeftRadius: "10%" }}
			>
				<Tab
					label={"CV Headers"}
					disabled
					sx={{ borderBottom: "3px solid #3b4b5e" }}
				/>
				{CVHeaderData.map(
					({ title, slug }: { title: string; slug: string }, _idx) => (
						<Tab key={slug} label={title} value={slug} />
					)
				)}
			</TabList>
		</TabContext>
	)
}

export default CVHeaderList
