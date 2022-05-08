import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Form from "react-bootstrap/Form";
import { color5 } from "../../Utils/constant";

import {
	Box,
	Grid,
	TextField,
	Container,
	FormControl,
	LinearProgress,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { taskDes } from "../../redux/task/actions";

export const ProjectTask = (props) => {
	const [show, setShow] = useState(false);

	const [values, setValues] = useState({
		descr: "",
		comments: "",
	});
	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const addTask = () => {
		if (values.descr) {
			dispatch(taskDes(values.descr));
		}
		setValues({ descr: "" });
	};

	let project = useSelector((state) => state.addProject);
	let user = useSelector((state) => state.user);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {}, [project, user]);

	return (
		<>
			<div>
				<div>
					<Header />
				</div>
				<div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
					<h2 className="heading" style={{ marginLeft: 40 }}>
						Project / {location.state.name}
					</h2>
				</div>
				<div>
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

										<div style={{ display: "flex" }}>
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
												<Button
													style={{
														width: "100%",
														backgroundColor: color5,
														color: "white",
													}}
													onClick={addTask}
												>
													Add Task
												</Button>

												<br />
												<br />
											</FormControl>
										</div>
										<div style={{ display: "flex", flexDirection: "row" }}>
											<Button onClick={() => setShow(true)}>ACTIVTY</Button>
											<Button>Comments</Button>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
											}}
										>
											<AccountCircle size="large" sx={{ marginTop: 5 }} />
											<FormControl fullWidth>
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
											</FormControl>
										</div>
									</form>
								</Grid>
								{show && (
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
								)}
							</Grid>
						</Box>
					</Container>
				</div>
			</div>
		</>
	);
};
