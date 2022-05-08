import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
	Home,
	SignUp,
	Login,
	AddProject,
	ProjectPage,
	Activate,
	ProjectTask,
} from "../Screens";
import allPaths from "./paths";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path={allPaths?.HOME} exact element={<Home />} />
				<Route path={allPaths?.LOGIN} exact element={<Login />} />
				<Route path={allPaths?.SIGNUP} exact element={<SignUp />} />
				<Route path={allPaths?.ADDPROJECT} exact element={<AddProject />} />
				<Route path={allPaths?.PROJECTPAGE} exact element={<ProjectPage />} />
				<Route path={allPaths?.ACTIVE} exact element={<Activate />} />
				<Route path={allPaths?.PROJECTHOME} exact element={<ProjectTask />} />
			</Routes>
		</Router>
	);
};

export { AppRoutes };
