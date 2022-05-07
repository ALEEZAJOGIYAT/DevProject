import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import { Home, SignUp, Login } from "../Screens";
import allPaths from "./paths";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <MenuLayout path={allPaths?.HOME} exact component={Home} />
                <MenuLayout path={allPaths?.ALGO} exact component={Algorithm} />
                <MenuLayout path={allPaths?.TRADE} exact component={TradeLog} />
                <MenuLayout path={allPaths?.WATCHLIST} exact component={WatchList} />
                <MenuLayout path={allPaths?.PORTFOLIO} exact component={Portfolio} />
                <MenuLayout path={allPaths?.FUNDMANAGEMENT} exact component={FundManagement} />
                <MenuLayout path={allPaths?.CONTACT} exact component={ContactUs} /> */}
        {/* <Route path="/:page404" exact component={Page404} /> */}
        <Route path={allPaths?.HOME} exact element={<Home/>} />
        <Route path={allPaths?.LOGIN} exact element={<Login/>} />
        <Route path={allPaths?.SIGNUP} exact element={<SignUp/>} />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
