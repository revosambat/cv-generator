import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Landing from "../containers/Landing"
import CvForm from "../containers/CvForm"
import TemplateCollection from "../containers/TemplateCollection"
import Box from "@mui/material/Box"
import { Stack } from "@mui/material"
import WebTitle from "../components/WebTitle"
import SharedLayout from "../containers/SharedLayout"
import FormProvider from "../context/context"

const GeneralLayout = () => {
	return (
		<Stack
			direction="row"
			display="flex"
			flexWrap={"revert"}
			sx={{ height: "100vh" }}
		>
			<Box
				flex={2}
				sx={{
					display: "flex",
					height: "100%",
					width: "100%",
					flexDirection: "column",
				}}
			>
				<WebTitle />
				<SharedLayout />
			</Box>
			<Box flex={3} sx={{ padding: "8px" }}>
				<Box sx={{ bgcolor: "primary.main", height: "96%", margin: "15px" }}>
					<Outlet />
				</Box>
			</Box>
		</Stack>
	)
}
const Router = () => {
	return (
		<BrowserRouter>
			<FormProvider>
				<Routes>
					<Route element={<GeneralLayout />}>
						<Route path="/" Component={() => <Landing />} />
						<Route path="/cv-form" Component={() => <CvForm />} />
					</Route>
					<Route path="/templates" Component={TemplateCollection} />
				</Routes>
			</FormProvider>
		</BrowserRouter>
	)
}

export default Router
