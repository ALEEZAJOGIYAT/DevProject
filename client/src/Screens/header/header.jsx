import React, { useEffect, useState, useSyncExternalStore } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { Box, Divider, Typography } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { color1, color5 } from "../../Utils/constant";
import "./style.css";
import { deleteUser } from "../../redux/user/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
	const signAuth = useSelector((state) => state.user);
	console.log(signAuth, "signAuth");
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const { authActions, history, user } = props;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logout = () => {
		setAnchorEl(null);
		dispatch(deleteUser(signAuth?.data?._id));
		navigate("/login");
	};

	return (
		<>
			<AppBar position="static" sx={{ backgroundColor: `${color5}` }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						className="mui-size logoHeading"
						// sx={{ flexGrow: 0.05, /* marginLeft: 3, */ /* letterSpacing: "0.3em" */ }}
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

					<div style={{ display: "flex", flexDirection: "row" }}>
						<IconButton
							sx={{
								// p: 0,
								color: "white",
								"&.MuiButtonBase-root:hover": {
									bgcolor: "transparent",
								},
							}}
							aria-controls={open ? "fade-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<AccountCircle style={{ fontSize: 26 }} />
						</IconButton>
						<Menu
							id="fade-menu"
							MenuListProps={{
								"aria-labelledby": "fade-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							TransitionComponent={Fade}
							style={{ marginTop: 8 }}
						>
							<Box sx={{ my: 1.5, px: 2.5 }}>
								<Typography
									sx={{ color: `${""}`, fontSize: 18 }}
									variant="h5"
									component="div"
								>
									<b>{"unknown"}</b>
								</Typography>
								<Typography
									sx={{ color: `${color1}` }}
									variant="p"
									component="div"
								>
									{"unknown@gmail.com"}
								</Typography>
							</Box>
							<Divider sx={{ my: 1 }} />
							<MenuItem onClick={logout} className="mui-size">
								<Logout style={{ fontSize: 20, color: `${""}` }} /> &nbsp;
								Logout
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
