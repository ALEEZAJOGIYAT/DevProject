import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import { Home, SignUp, Login, ProjectPage,Activate } from "../Screens";


import allPaths from "./paths";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/:page404" exact component={Page404} /> */}
        <Route path={allPaths?.HOME} exact element={<Home/>} />
        <Route path={allPaths?.LOGIN} exact element={<Login/>} />
        <Route path={allPaths?.SIGNUP} exact element={<SignUp/>} />
        <Route path={allPaths?.PROJECTPAGE} exact element={<ProjectPage/>} />
        <Route path={allPaths?.ACTIVE} exact element={<Activate/>} />
        {/* <Route path={allPaths?.PROJECTPAGE} exact element={<Index/>} /> */}
      </Routes>
    </Router>
  );
};

export { AppRoutes };
