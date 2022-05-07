import React, { useState } from "react";
import Header from "../../Components/Header";
import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../assets/folder.json";
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
import { CreateProject } from "../../Components/createProjectModal";

const AddProject = () => {
	const [open, setOpen] = useState(false);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
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
							columnSpacing={{ xs: 1, sm: 2, md: 5 }}
						>
							<Grid item sm={12} md={6} mt={10} className="Grid">
								<div style={{ marginTop: "-20rem" }}>
									<Lottie options={defaultOptions} height={320} width={450} />

									<div>
										<h2 className="heading">You currently have no projects</h2>
										<p className="desc">Lets Create your first Project</p>
									</div>
									<div>
										<CreateProject />
									</div>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</>
	);
};

export default AddProject;
