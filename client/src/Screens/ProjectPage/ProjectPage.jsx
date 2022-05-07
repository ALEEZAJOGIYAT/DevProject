import React, { useState } from "react";
import "./App.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../../Components/Header";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModa"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReportIcon from '@mui/icons-material/Report';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import BugReportIcon from '@mui/icons-material/BugReport';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box'
import { FormControl } from "@mui/material";



const ProjectPage = ({pro}) => {
  const history = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [projects, setProjects] = useState([])
  
  return (
    <>
      <div className="menu_header">
        <Header />
      </div>
    {/* {pro.map((todo, index) => ( */}
      <div className="adduser">
      <Box sx={{ maxWidth: 100 }}>
      <FormControl fullWidth>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{
            border:'none'
          }}
        >
          <MenuItem value={10}>
          <ListItemIcon>
            <BookmarkIcon/>
          </ListItemIcon>
          {/* <ListItemText primary="Inbox" /> */}
        </MenuItem>
        <MenuItem value={20}>
        <ListItemIcon>
            <BugReportIcon/>
          </ListItemIcon>
          {/* <ListItemText primary="Bug" /> */}
          </MenuItem>
        <MenuItem value={30}>
        <ListItemIcon>
            <EnhancedEncryptionIcon/>
          </ListItemIcon>
          {/* <ListItemText primary="Enhancement" /> */}
          </MenuItem>
        <MenuItem value={40}>
        <ListItemIcon>
            <ReportIcon/>
          </ListItemIcon>
          {/* <ListItemText primary="Issue" /> */}
          </MenuItem>
        </Select>
        </FormControl>
        </Box>
        <p className="project_des">reeba</p>

        <Form.Select
          className="selector"
          size="sm"
          aria-label="Default select example"
        >
          <option>To do</option>
          <option value="1">In Progress</option>
          <option value="2">Done</option>
          <option value="3">Review</option>
        </Form.Select>

        <AccountCircle className="user" onClick={() => setModalShow(true)} />

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      {/* ))} */}
    </>
  );
};

export default ProjectPage;
