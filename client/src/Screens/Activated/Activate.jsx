import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Activate = () => {
	const [values, setValues] = useState({
		email: "",
		Id: "",
	});
	const history = useNavigate();
	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const userData = {
		email: values.email,
		Id: values.Id,
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		history("/project");
	};

	return (
		<>
			<div className="main">
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<Container sx={{ mt: 2, display: "flex" }}>
					<Paper className="Paper" elevation={3}>
						<form onSubmit={handlesubmit}>
							<h1 className="h1">Activate Your Account</h1>
							<FormControl fullWidth>
								<TextField
									required
									id="outlined-basic"
									label="Enter email"
									type="email"
									autoComplete="current-text"
									variant="filled"
									margin="normal"
									name="email"
									value={values.email}
									onChange={handleChange}
								/>
								<TextField
									required
									id="custom-css-outlined-input"
									label="Enter Your Token"
									type="text"
									autoComplete="current-text"
									variant="filled"
									margin="normal"
									name="Id"
									value={values.Id}
									onChange={handleChange}
								/>
							</FormControl>
							<Button className="button" variant="contained" type="submit">
								Submit
							</Button>
						</form>
					</Paper>
				</Container>
			</div>
		</>
	);
};

export default Activate;
