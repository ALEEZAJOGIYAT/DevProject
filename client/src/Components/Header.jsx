import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { color1, color5 } from "../Utils/constant";
import { Link } from "react-router-dom";
import "./App.css";

const Header = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const { authActions, history, user } = props;
	const [auth, setAuth] = useState(true);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar position="static" sx={{ backgroundColor: `${color5}` }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						className="mui-size logoHeading"
					>
						PROJECT MANAGER
					</Typography>
					<Typography
						variant="h6"
						component="div"
						className="mui-size"
						sx={{ flexGrow: 1 }}
					>
						&nbsp;
					</Typography>

					<div className="btns">
						<Link to="/signup">
							<button>Sign Up</button>
						</Link>
						<Link to="/login">
							<button>Login</button>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
