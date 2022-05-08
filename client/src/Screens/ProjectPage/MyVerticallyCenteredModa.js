import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const MyVerticallyCenteredModal = (props) => {
	const project = useSelector((state) => state.addProject);

	useEffect(() => {}, [project]);

	const [values, setValues] = useState({
		email: "",
		role: "",
	});
	const handleChange = (event) => {
		event.preventDefault();
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
		alert("successfully");
		axios
			.post("http://localhost:4000/email", {
				email: values.email,
				role: values.role,
				key: project?.data[0]?.data.key,
				projectName: project?.data[0]?.data?.projectName,
			})
			.then((res) => {
				console.log("token response", res);
				// dispatch(User(res?.data))
				// history("/");
			})
			.catch((er) => {
				console.log("er response", er);
			});
	};
	return (
		<>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Add People
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<FormControl fullWidth>
							<TextField
								required
								id="outlined-basic"
								label="Email"
								autoComplete="current-text"
								variant="outlined"
								margin="normal"
								name="email"
								value={values.email}
								onChange={handleChange}
							/>
							<TextField
								required
								id="custom-css-outlined-input"
								label="Role"
								autoComplete="current-text"
								variant="outlined"
								margin="normal"
								name="role"
								value={values.role}
								onChange={handleChange}
							/>
						</FormControl>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyVerticallyCenteredModal;
