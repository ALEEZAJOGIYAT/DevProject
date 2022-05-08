import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CreateProject } from "../../Components/createProjectModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import allPaths from "../../Config/paths";
import Header from "../header/header";

export const ProjectHome = () => {
	let project = useSelector((state) => state.addProject);
	let user = useSelector((state) => state.user);

	console.log(project?.data[0]?.data.projectName, "keyyyyyyy");

	const navigate = useNavigate();

	console.log("reducer", project);

	const handleClick = () => {
		navigate(allPaths?.PROJECTPAGE);
	};

	useEffect(() => {
		console.log("job?.data", project);
	}, [project, user]);

	return (
		<div>
			<div>
				<Header />
			</div>
			<div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
				<h2 className="heading" style={{ marginLeft: 40 }}>
					Projects
				</h2>
				<div style={{ marginLeft: 900 }}>
					<CreateProject />
				</div>
			</div>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650, padding: 12, marginTop: 10 }}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Key</TableCell>
							<TableCell align="right">Type</TableCell>
							<TableCell align="right">Lead</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow
							// key={id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{" "}
								{project.data[0]?.data.projectName}
							</TableCell>
							<TableCell align="right">{project.data[0]?.data.key}</TableCell>
							<TableCell align="right">{project.data[0]?.data.type}</TableCell>
							<TableCell align="right">{user.data[0]?.data.name}</TableCell>

							<TableCell align="right">
								<Button onClick={handleClick}>
									<ArrowForwardIosIcon />
								</Button>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
