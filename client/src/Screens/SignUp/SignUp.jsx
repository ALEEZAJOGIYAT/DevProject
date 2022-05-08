import React, { useState } from "react";
import "./style.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AUTH } from "../../Utils/apis";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
	let formData = new FormData();
	const navigate = useNavigate();
	const [input, setInput] = useState({
		firstname: "",
		lastname: "",
	});
	const [age, setAge] = useState("");
	const [show, setshow] = useState(false);
	const [phone, setphone] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [loading, setloading] = useState(false);
	let [firstnameError, setfirstnameError] = useState(false);
	let [lastnameError, setlastnameError] = useState(false);
	let [phoneError, setphoneError] = useState(false);
	let [emailError, setemailError] = useState(false);
	let [invalidEmail, setInvalidEmail] = useState(false);
	let [invalidpass, setInvalidpass] = useState(false);
	let [passwordError, setpasswordError] = useState(false);

	const [File, setFile] = useState();
	const onFileChange = (e) => {
		setFile(e?.target?.files[0]);
	};

	formData.append("file", File);
	formData.append("upload_preset", "fdp4mw2g");

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		if (!input.firstname) {
			setfirstnameError(true);
		} else {
			setfirstnameError(false);
		}
		if (!input.lastname) {
			setlastnameError(true);
		} else {
			setlastnameError(false);
		}
		if (!email) {
			setemailError(true);
		} else {
			setemailError(false);
		}
		if (!password) {
			setpasswordError(true);
		} else {
			setpasswordError(false);
		}

		axios.post("http://localhost:4000/signup", {
			firstName: input.firstname,
			lastName: input.lastname,
			email: email,
			Password: password,
			img: File,
		});
		setInput({
			firstname: "",
			lastname: "",
		});
		setemail("");
		setpassword("");
		setFile(null);
		navigate("/login");
	};

	const Input = styled("input")({
		display: "none",
	});
	const handlefirstname = (event) => {
		setfirstnameError(false);
		if (event.target.name === "firstname") {
			setInput({
				...input,
				[event.target.name]:
					event.target.value.charAt([0]).toUpperCase() +
					event.target.value.slice(1),
			});
		}
	};

	const handlelastname = (event) => {
		if (!input.firstname) {
			setlastnameError(false);
			setfirstnameError(true);
		} else {
			setlastnameError(false);
			setfirstnameError(false);
			if (event.target.name === "lastname") {
				setInput({
					...input,
					[event.target.name]:
						event.target.value.charAt([0]).toUpperCase() +
						event.target.value.slice(1),
				});
			}
		}
	};
	return (
		<>
			<div className="main">
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<div className="container">
					<form onSubmit={onSubmit} className="form">
						<h1>Sign Up</h1>
						<FormControl fullWidth>
							<div className="name">
								<TextField
									// sx={show ? { border: "1px solid red" } : {}}
									sx={
										firstnameError
											? {
													width: "100%",
													marginRight: "10px",
													"& label": {
														color: "#0000008A",
														fontSize: "1.2em",
													},
													"& label.Mui-focused": {
														color: "#ffff",
													},
													"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
														{
															border: "1px solid red",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root":
														{
															backgroundColor: "#ffff",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:before":
														{
															borderBottomColor: "none",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after":
														{
															borderBottomColor: "none",
														},
													"& .css-12u4bn2-MuiFormControl-root-MuiTextField-root":
														{
															width: "100%",
														},
											  }
											: {
													width: "100%",
													marginRight: "10px",
													"& label": {
														color: "#ffff",
														fontSize: "1.2em",
													},
													"& label.Mui-focused": {
														color: "#ffff",
													},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root":
														{
															color: "#ffff",
															boderBottomColor: "none",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:after":
														{
															border: "none",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
														{
															color: "#ffff",
														},
													"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
														{
															border: "1px solid #C1C8E4",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:before":
														{
															borderBottom: "none",
														},
											  }
									}
									autoComplete="current-text"
									type="text"
									label="First name"
									variant="filled"
									id="custom-css-outlined-input"
									margin="normal"
									value={input.firstname}
									name="firstname"
									onChange={handlefirstname}
									InputLabelProps={{
										shrink: true,
									}}
									error={firstnameError}
								/>
								<TextField
									// sx={show ? { border: "1px solid red" } : {}}
									sx={
										lastnameError
											? {
													width: "100%",
													marginRight: "10px",
													"& label": {
														color: "#0000008A",
														fontSize: "1.2em",
													},

													"& label.Mui-focused": {
														color: "#ffff",
													},

													"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
														{
															border: "1px solid red",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root":
														{
															backgroundColor: "#ffff",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:before":
														{
															borderBottomColor: "none",
														},
													"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after":
														{
															borderBottomColor: "none",
														},
													"& .css-12u4bn2-MuiFormControl-root-MuiTextField-root":
														{
															width: "100%",
														},
											  }
											: {
													width: "100%",
													marginRight: "10px",
													"& label": {
														color: "#ffff",
														fontSize: "1.2em",
													},
													"& label.Mui-focused": {
														color: "#ffff",
													},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root":
														{
															color: "#ffff",
															boderBottomColor: "none",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:after":
														{
															border: "none",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
														{
															color: "#ffff",
														},
													"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
														{
															border: "1px solid #C1C8E4",
														},
													"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:before":
														{
															borderBottom: "none",
														},
											  }
									}
									autoComplete="current-text"
									type="text"
									label="Last name"
									variant="filled"
									id="custom-css-outlined-input"
									margin="normal"
									value={input.lastname}
									name="lastname"
									onChange={handlelastname}
									InputLabelProps={{
										shrink: true,
									}}
									error={lastnameError}
								/>
							</div>
							<TextField
								id="standard-password-input"
								label="Email"
								type="email"
								autoComplete="current-email"
								variant="filled"
								margin="normal"
								sx={
									emailError
										? {
												width: "100%",
												marginRight: "10px",
												"& label": {
													color: "#0000008A",
													fontSize: "1.2em",
												},
												"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
													{
														border: "1px solid red",
													},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root": {
													backgroundColor: "#ffff",
												},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:before":
													{
														borderBottomColor: "none",
													},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after":
													{
														borderBottomColor: "none",
													},
												"& .css-12u4bn2-MuiFormControl-root-MuiTextField-root":
													{
														width: "100%",
													},
										  }
										: {
												width: "100%",
												marginRight: "10px",
												"& label": {
													color: "#ffff",
													fontSize: "1.2em",
												},
												"& label.Mui-focused": {
													color: "#ffff",
												},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root": {
													color: "#ffff",
													boderBottomColor: "none",
												},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:after":
													{
														border: "none",
													},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
													{
														color: "#ffff",
													},
												"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
													{
														border: "1px solid #C1C8E4",
													},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:before":
													{
														borderBottom: "none",
													},
										  }
								}
								value={email}
								name="email"
								onChange={(e) => {
									if (!input.lastname) {
										setlastnameError(true);
									} else {
										setemail(e.target.value);
										let mailformat =
											/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
										if (!email.match(mailformat)) {
											setInvalidEmail(true);
											setemail(e.target.value);
										} else {
											setInvalidEmail(false);
											setemailError(false);
											setphoneError(false);
											setemail(e.target.value);
										}
									}
								}}
								InputLabelProps={{
									shrink: true,
								}}
								error={emailError}
							/>
							{invalidEmail && (
								<small className="text-danger">Invalid Email</small>
							)}

							<TextField
								id="standard-password-input"
								label="Password "
								type="password"
								autoComplete="current-text"
								variant="filled"
								margin="normal"
								sx={
									passwordError
										? {
												width: "100%",
												marginRight: "10px",
												"& label": {
													color: "#0000008A",
													fontSize: "1.2em",
												},
												"& label.Mui-focused": {
													color: "#ffff",
												},
												"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
													{
														border: "1px solid red",
													},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root": {
													backgroundColor: "#ffff",
												},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:before":
													{
														borderBottom: "none",
													},
												"& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after":
													{
														borderBottom: "none",
													},
												"& .css-12u4bn2-MuiFormControl-root-MuiTextField-root":
													{
														width: "100%",
													},
										  }
										: {
												width: "100%",
												marginRight: "10px",
												"& label": {
													color: "#ffff",
													fontSize: "1.2em",
												},
												"& label.Mui-focused": {
													color: "#ffff",
												},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root": {
													color: "#ffff",
													boderBottomColor: "none",
												},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:after":
													{
														border: "none",
													},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
													{
														color: "#ffff",
													},
												"& .css-10botns-MuiInputBase-input-MuiFilledInput-input":
													{
														border: "1px solid #C1C8E4",
													},
												"& .css-hc1pde-MuiInputBase-root-MuiFilledInput-root:before":
													{
														borderBottom: "none",
													},
										  }
								}
								value={password}
								name="password"
								onChange={(e) => {
									if (!email) {
										setemailError(true);
									} else {
										let passformat =
											/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
										if (!password.match(passformat)) {
											setInvalidpass(true);
											setpassword(e.target.value);
										} else {
											setInvalidpass(false);
											setemailError(false);
											setpasswordError(false);
											setpassword(e.target.value);
										}
										// setInvalidpass(false);
										// setpasswordError(false)
										// setemailError(false)
										// setpassword(e.target.value)
									}
								}}
								InputLabelProps={{
									shrink: true,
								}}
								error={passwordError}
							/>
							{invalidpass ? (
								<small className="text-danger">
									Oops! You need a password longer than 8 characters with
									numbers and letters.
								</small>
							) : (
								""
							)}
						</FormControl>
						<label htmlFor="contained-button-file">
							<Input
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
								onChange={onFileChange}
							/>
							<Button
								variant="contained"
								component="span"
								className="uploadBtn"
							>
								Upload Avatar
							</Button>
						</label>

						<button variant="contained" type="submit">
							{loading ? <CircularProgress color="inherit" /> : "Sign Up"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUp;
