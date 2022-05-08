import React, { useState, useEffect } from "react";
import "./App.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModa";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReportIcon from "@mui/icons-material/Report";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import BugReportIcon from "@mui/icons-material/BugReport";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { FormControl, Container, Paper, TextField, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../header/header";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "react-bootstrap";

const ProjectPage = () => {
	const navigate = useNavigate();

	const [modalShow, setModalShow] = React.useState(false);

	const project = useSelector((state) => state.addProject);
	const task = useSelector((state) => state.taskDes);

	const location = useLocation();

	useEffect(() => {}, [project, task]);

	return (
		<>
			<div className="menu_header">
				<Header />
			</div>
			{project?.data?.map((items, index) => {
				return (
					<>
						<div className="adduser">
							<Box sx={{ maxWidth: 100 }}>
								<FormControl fullWidth>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										sx={{
											border: "none",
										}}
									>
										<MenuItem value={10}>
											<ListItemIcon>
												<BookmarkIcon />
											</ListItemIcon>
										</MenuItem>
										<MenuItem value={20}>
											<ListItemIcon>
												<BugReportIcon />
											</ListItemIcon>
										</MenuItem>
										<MenuItem value={30}>
											<ListItemIcon>
												<EnhancedEncryptionIcon />
											</ListItemIcon>
										</MenuItem>
										<MenuItem value={40}>
											<ListItemIcon>
												<ReportIcon />
											</ListItemIcon>
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<p className="project_des">{items?.data?.projectName}</p>

							<Button
								onClick={() =>
									navigate("/task", {
										state: { name: items?.data?.projectName },
									})
								}
							>
								<AddIcon />
							</Button>

							<Form.Select
								className="selector"
								size="sm"
								aria-label="Default select example"
							>
								<option>To do</option>
								<option value="1">In Progress</option>
								<option value="2">Done</option>
								<option value="3">Review</option>
							</Form.Select>

							<AccountCircle
								className="user"
								onClick={() => setModalShow(true)}
							/>
							<br />
							<br />

							<MyVerticallyCenteredModal
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
						</div>
						<div className="task">
							{task?.data?.map((item, index) => {
								return (
									<div>
										<Table striped bordered hover size="sm">
											<thead>
												<tr>
													<th>Task</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{item?.data}</td>
												</tr>
											</tbody>
										</Table>
									</div>
								);
							})}
						</div>
					</>
				);
			})}
		</>
	);
};

export default ProjectPage;
