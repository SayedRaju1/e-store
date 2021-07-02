import { Box, Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SubTotalContext } from '../../App';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const [subTotal, setSubTotal] = useContext(SubTotalContext)
    return (
        <div style={{ position: "fixed", width: "100vw" }} className="bg-dark">
            <div className="d-flex justify-content-end text-white container">
                <Typography>LOGIN</Typography>
                <Typography className="ms-3">CREATE ACCOUNT</Typography>
            </div>
            <Navbar bg="white" variant="light" expand="lg" className="  ">
                <div className="container  ">
                    <Navbar.Brand className="  p-0 m-0" href="">
                        <Link className="" to="/">
                            <img style={{ height: "70px" }} src={logo} alt="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Link class="text-reset text-decoration-none d-xs-block d-md-none" to={"/cart"}>
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