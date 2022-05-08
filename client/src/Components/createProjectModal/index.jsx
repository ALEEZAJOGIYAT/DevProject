import React, { useState } from "react";
import "./style.css";
import { Button, Box, Modal, TextField, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/addProject/actions";
import { useNavigate } from "react-router-dom";
import allPaths from "../../Config/paths";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const CreateProject = () => {
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();
	const history = useNavigate();

	const [values, setValues] = useState({
		projectName: "",
		key: "",
		type: "",
	});

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleAddProject = (e) => {
		e.preventDefault();
		if (values.key && values.projectName && values.type) {
			dispatch(addProject(values));
			history(allPaths?.PROJECTPAGE);
		}
		console.log(values, "valuessssss");
	};

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>
				Create Project
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h4 className="heading">Add Project Details</h4>
					<p className="desc">You can change these details anytime</p>
					<div className="text_box">
						<TextField
							required
							id="custom-css-outlined-input"
							label="Project Name"
							type="text"
							autoComplete="current-text"
							// variant="filled"
							margin="normal"
							name="projectName"
							value={values.projectName}
							onChange={handleChange}
						/>
						<FormHelperText>
							Anyone with this key can access and you can administer this
							project
						</FormHelperText>
						<br />
						<TextField
							required
							id="custom-css-outlined-input"
							label="Key"
							type="text"
							autoComplete="current-text"
							margin="normal"
							name="key"
							value={values.key}
							onChange={handleChange}
						/>
						<TextField
							required
							id="custom-css-outlined-input"
							label="Type of Project"
							type="text"
							autoComplete="current-text"
							margin="normal"
							name="type"
							value={values.type}
							onChange={handleChange}
						/>
					</div>

					<Button
						variant="contained"
						size="small"
						sx={{ marginTop: 3, marginLeft: 12 }}
						onClick={handleAddProject}
					>
						Add
					</Button>
				</Box>
			</Modal>
		</>
	);
};
