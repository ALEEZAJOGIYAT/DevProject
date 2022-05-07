import React, { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { user } from "../../redux/user/actions";

const Login = () => {
	const [values, setValues] = useState({
		cnic: "",
		email: "",
		password: "",
		showPassword: false,
	});
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const userData = {
		cnic: values.cnic,
		email: values.email,
		password: values.password,
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		if (
			axios
				.post("http://localhost:4000/login", {
					cnic: values.cnic,
					email: values.email,
					password: values.password,
				})
				.then((res) => {
					console.log("token response", res?.data);
					dispatch(user(res?.data));
				})
				.catch((er) => {
					console.log("er response", er);
				})
		) {
			// const data=res.json()
			// console.log(data)
		}
		// history("/");
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
							<h1 className="h1">Log in to your Account</h1>
							<FormControl>
								<TextField
									required
									id="outlined-basic"
									label="Email"
									type="email"
									autoComplete="current-text"
									variant="filled"
									margin="normal"
									name="email"
									value={values.email}
									onChange={handleChange}
									className="textField"
								/>
								<TextField
									required
									id="custom-css-outlined-input"
									label="Password"
									type="password"
									autoComplete="current-text"
									variant="filled"
									margin="normal"
									name="password"
									value={values.password}
									onChange={handleChange}
									className="textField"
								/>
								{/* <Form.Check type="checkbox" label="Remember me" /> */}
								<FormHelperText>
									We'll keep you signed in on this device. You may be asked to
									enter your password when modifying sensitive account
									information.
								</FormHelperText>
							</FormControl>
							<Button className="button" variant="contained" type="submit">
								Submit
							</Button>
							<Link to="/signup">
								<p style={{ position: "relative" }}>
									Not have an account ? Sign up here
								</p>
							</Link>
						</form>
					</Paper>
				</Container>

				{/* 
      <Switch>
        <Route path="/sign-up">
          <Signup />
        </Route>
      </Switch> */}
			</div>
		</>
	);
};

export default Login;
