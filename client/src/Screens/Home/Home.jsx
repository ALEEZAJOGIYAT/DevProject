
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
// import Lottie from "lottie-react";
// import Wave from "react-wavify";
import './style.css'
import  Header from '../../Components/Header'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios'
import image from '../../assets/side-image.png'
// import Products from "./Products";
// import ecommerceshop from "../images/98481-e-commerce-shop-online.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = () => {
  const [check, setcheck] = useState("");
  const call = () => {
    axios.get("http://localhost:4000/login").then((res) => {
      console.log("res", res);
    });
  };
  // const signAuth = useSelector((state) => state.addUser);
  
  // useEffect(() => {
  //   console.log(signAuth)
  //   console.log(signAuth?.data?.user?.Role);
  //   // setcheck(signAuth.state.data.user)
  // }, [signAuth]);
  return (
    <>
    <div className='menu_header'>
                <Header/>
            </div>
    <div className="main">
        <div className="bgcolor"></div>
        <div className="bgcolor"></div>
        <div className="bgcolor"></div>
    <Container maxWidth="lg" className="cont" >
        <Box sx={{ width: "100%",paddingBottom:"4em" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            
          >
            <Grid item sm={12} md={6} mt={10} className="Grid">
              <h1 className="heading">Project Manager helps teams move work forward.</h1>
              <p className="descp">Collaborate, manage projects, and reach new productivity peaks.
               From high rises to the home office, the way your team works is unique—accomplish it all with Us</p>

              <Link to="/signup" variant="body2">
                <Button
                className="SignBtn"
                
                  type="submit"
                >
                  SignUp Now
                </Button>
              </Link>
            </Grid>
            <Grid item sm={12} md={5} className="sideimag">
              <img src={image} alt="img" srcset="" />
              {/* <Lottie animationData={ecommerceshop} /> */}
            </Grid>
          </Grid>
          {/* <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 460" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(22.314, 17.468, 44.374, 1)" offset="0%"></stop><stop stop-color="rgba(28.927, 55.946, 199.195, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,184L30,222.3C60,261,120,337,180,345C240,353,300,291,360,283.7C420,276,480,322,540,314.3C600,307,660,245,720,191.7C780,138,840,92,900,107.3C960,123,1020,199,1080,222.3C1140,245,1200,215,1260,199.3C1320,184,1380,184,1440,199.3C1500,215,1560,245,1620,237.7C1680,230,1740,184,1800,207C1860,230,1920,322,1980,314.3C2040,307,2100,199,2160,130.3C2220,61,2280,31,2340,61.3C2400,92,2460,184,2520,253C2580,322,2640,368,2700,360.3C2760,353,2820,291,2880,222.3C2940,153,3000,77,3060,76.7C3120,77,3180,153,3240,168.7C3300,184,3360,138,3420,115C3480,92,3540,92,3600,99.7C3660,107,3720,123,3780,168.7C3840,215,3900,291,3960,291.3C4020,291,4080,215,4140,176.3C4200,138,4260,138,4290,138L4320,138L4320,460L4290,460C4260,460,4200,460,4140,460C4080,460,4020,460,3960,460C3900,460,3840,460,3780,460C3720,460,3660,460,3600,460C3540,460,3480,460,3420,460C3360,460,3300,460,3240,460C3180,460,3120,460,3060,460C3000,460,2940,460,2880,460C2820,460,2760,460,2700,460C2640,460,2580,460,2520,460C2460,460,2400,460,2340,460C2280,460,2220,460,2160,460C2100,460,2040,460,1980,460C1920,460,1860,460,1800,460C1740,460,1680,460,1620,460C1560,460,1500,460,1440,460C1380,460,1320,460,1260,460C1200,460,1140,460,1080,460C1020,460,960,460,900,460C840,460,780,460,720,460C660,460,600,460,540,460C480,460,420,460,360,460C300,460,240,460,180,460C120,460,60,460,30,460L0,460Z"></path></svg> */}
          {/* <svg style={{position:"absolute"}}><clipPath id="wave4"><path d="M1228.1 62.9026C1015.3 -18.9903 1005.12 -4.07699 783.138 14.9026C561.156 33.8822 492.527 81.4487 327.138 62.9026C161.75 44.3565 74.1221 67.9803 -5.00049 87.7609C-5.00049 175.694 -5.00073 584 -5.00073 584L1517.1 584L1517.1 62.9025C1517.1 62.9025 1441.29 144.945 1228.1 62.9026Z" fill="url(#paint0_linear)"></path></clipPath></svg> */}
        </Box>
      </Container>
      </div>
    </>
  )
}

export default Home