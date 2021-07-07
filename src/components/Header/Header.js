import { Box, Container, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import logoSmall from '../../images/logo-small.jpg'
import './Header.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
// import { SubTotalContext } from '../../App';
import { CurveContext } from '../../App';
import { Navbar, Nav } from 'react-bootstrap';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

const Header = () => {
    const [curve, setCurve] = useContext(CurveContext)

    //CURVE ON/OFF
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (event) => {
        setCurve(event.target.checked)
        console.log(event.target.checked);
    };
    return (
        <div style={{ position: "fixed", width: "100vw" }} className="bg-dark">
            {/* <div className="d-flex justify-content-end p-0 m-0 text-white container">
                <p>LOGIN</p>
                <p className="ms-3 align-self-center">CREATE ACCOUNT</p>
            </div> */}
            <Navbar bg="white" variant="light" expand="lg" className="  ">
                <div className="container  ">
                    <Navbar.Brand className="p-0 m-0" href="">
                        <Link className="" to="/">
                            <img className="logo-img" src={logo} alt="logo" />
                        </Link>
                    </Navbar.Brand>

                    <div className="d-flex switch-div align-items-center">
                        <p className="switch-label d-md-none d-xs-block">S</p>
                        <p className="switch-label d-none d-xl-block d-lg-block d-md-block">SLIM</p>
                        <Switch
                            className="switch"
                            size="small"
                            onChange={handleChange}
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            label="Primary"
                        />
                        <p className="switch-label d-md-none d-xs-block">C</p>
                        <p className="switch-label d-none d-xl-block d-lg-block d-md-block">CURVE</p>
                    </div>
                    <Link class="text-reset text-decoration-none d-xs-block px-2 pt-1 d-md-none" to={"/cart"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </Link>

                    <Navbar.Toggle className=" " aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="   justify-content-end" id="basic-navbar-nav">
                        <Nav className="  ">
                            <Nav.Link className="   text-dark">
                                <Link class="text-reset   text-decoration-none nav-link" to={"/"}><p className="px-3">HOME</p></Link>
                            </Nav.Link>
                            <Nav.Link className="text-dark">
                                <Link class="text-reset text-decoration-none nav-link" to={"/new-collection"}><p className="px-3">NEW COLLECTION</p></Link>
                            </Nav.Link>
                            <Nav.Link className="text-dark">
                                <Link class="text-reset text-decoration-none nav-link" to={"/shop"}><p className="px-3">SHOP</p></Link>
                            </Nav.Link>
                            <Nav.Link className="text-dark">
                                <Link class="text-reset text-decoration-none nav-link" to={"/featured"}><p className="px-3">FEATURED ITEMS</p></Link>
                            </Nav.Link>
                            <Nav.Link className="text-dark">
                                <Link class="text-reset text-decoration-none d-flex nav-link" to={"/cart"}>
                                    <svg style={{ position: "relative", bottom: "2px", left: "10px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    <p className="px-3">CART</p>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;