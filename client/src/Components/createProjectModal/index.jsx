import React, { useState } from "react";
import "./style.css";
import {
	Button,
	Container,
	Box,
	Grid,
	Modal,
	Typography,
	TextField,
	FormHelperText,
	FormLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/addProject/actions";

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

	const [values, setValues] = useState({
		projectName: "",
		key: "",
	});
	// const history = useNavigate();

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleAddProject = (e) => {
		e.preventDefault();
		if (values.key && values.projectName) {
			dispatch(addProject(values));
		}
		console.log(values, "valuessssss");
	};

	return (
		<>
			<Button
				variant="contained"
				onClick={handleOpen}
				// className="SignBtn"
			>
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
						{/* <p className="label">Key</p> */}
						<TextField
							required
							id="custom-css-outlined-input"
							label="Key"
							type="text"
							autoComplete="current-text"
							// variant="filled"
							margin="normal"
							name="key"
							value={values.key}
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
