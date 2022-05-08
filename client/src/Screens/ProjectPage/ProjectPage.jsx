import React, { useState, useEffect } from "react";
import "./App.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../../Components/Header";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LinearProgress } from "@mui/material";

const ProjectPage = () => {
	const [values, setValues] = useState({
		descr: "",
		comments: "",
	});

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const [modalShow, setModalShow] = React.useState(false);
	const project = useSelector((state) => state.addProject);

	useEffect(() => {
		console.log(project?.data, "dataaaaaaa");
	}, [project]);

	return (
		<>
			<div className="menu_header">
				<Header />
			</div>
			{/* {project.data?.map((item, index) => {
				return ( */}
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
					<p className="project_des">{project?.data[0]?.data.projectName}</p>

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

					<AccountCircle className="user" onClick={() => setModalShow(true)} />

					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
				<div>
					<Button size="small" sx={{ marginLeft: 7 }}>
						Create issue
					</Button>
				</div>

				<div>
					<div className="bgcolor"></div>
					<div className="bgcolor"></div>
					<div className="bgcolor"></div>
					<Container sx={{ marginTop: 5 }}>
						<Box>
							<Grid
								container
								rowSpacing={1}
								columnSpacing={{ xs: 1, sm: 2, md: 3 }}
							>
								<Grid
									item
									sm={12}
									md={6}
									mt={10}
									className="Grid"
									sx={{ marginTop: -3 }}
								>
									<form>
										<h4 className="h1">Task</h4>
										<FormControl fullWidth>
											<TextField
												required
												id="outlined-basic"
												label="Description"
												type="email"
												autoComplete="current-text"
												variant="filled"
												margin="normal"
												name="descr"
												value={values.descr}
												onChange={handleChange}
											/>
											<br />
											<br />
											{/* <Form.Check type="checkbox" label="Remember me" /> */}
										</FormControl>
										<div style={{ display: "flex", flexDirection: "row" }}>
											<Button>ACTIVTY</Button>
											<Button>Comments</Button>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												// marginTop: 10,
											}}
										>
											<AccountCircle size="large" sx={{ marginTop: 5 }} />
											<TextField
												required
												id="outlined-basic"
												label="Add a Comment"
												autoComplete="current-text"
												variant="filled"
												margin="normal"
												name="comments"
												value={values.comments}
												onChange={handleChange}
											/>
										</div>
									</form>
								</Grid>
								<Grid item sm={12} md={5} sx={{ marginLeft: 7 }}>
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
									<div>
										<p className="heading" style={{ marginTop: 20 }}>
											Assignee
										</p>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												marginTop: 10,
											}}
										>
											<AccountCircle className="user" />
											<p>name</p>
										</div>
									</div>
									<div>
										<p className="heading" style={{ marginTop: "2em" }}>
											Reporter
										</p>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												marginTop: 10,
											}}
										>
											<AccountCircle className="user" />
											<p>name</p>
										</div>
										<div style={{ marginTop: 30 }}>
											<div className="box">
												<p
													className="heading"
													style={{
														marginTop: 10,
														marginLeft: 5,
														marginRight: 5,
													}}
												>
													Time Tracking
												</p>
												<div
													style={{
														marginTop: 15,
														marginLeft: 5,
														marginRight: 5,
													}}
												>
													<LinearProgress
														variant="determinate"
														disbaled={false}
													/>
													<label>3h logged</label>
												</div>
											</div>
											<p className="heading" style={{ marginTop: 20 }}>
												Priority
											</p>
										</div>
									</div>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</div>
			</>
			{/* );
			})} */}
		</>
	);
};

export default ProjectPage;
