import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import image from "../../assets/side-image.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../header/header";

const Home = () => {
	const [check, setcheck] = useState("");
	const call = () => {
		axios.get("http://localhost:4000/login").then((res) => {});
	};

	return (
		<>
			<div className="menu_header">
				<Header />
			</div>
			<div className="main">
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<div className="bgcolor"></div>
				<Container maxWidth="lg" className="cont">
					<Box sx={{ width: "100%", paddingBottom: "4em" }}>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						>
							<Grid item sm={12} md={6} mt={10} className="Grid">
								<h1 className="heading">
									Project Manager helps teams move work forward.
								</h1>
								<p className="descp">
									Collaborate, manage projects, and reach new productivity
									peaks. From high rises to the home office, the way your team
									works is unique—accomplish it all with Us
								</p>

								<Link to="/signup" variant="body2">
									<Button className="SignBtn" type="submit">
										SignUp Now
									</Button>
								</Link>
							</Grid>
							<Grid item sm={12} md={5} className="sideimag">
								<img src={image} alt="img" srcset="" />
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</>
	);
};

export default Home;
