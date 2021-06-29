import { Box, Container, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import logo from '../../images/logo.png'
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
        <div className="bg-dark">
            <div className="d-flex justify-content-end text-white container">
                <Typography>LOGIN</Typography>
                <Typography className="ms-3">CREATE ACCOUNT</Typography>
            </div>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container d-flex justify-content-between">
                    <div >
                        <Link to="/">
                            <img style={{ height: "80px" }} src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="px-2 text-reset text-decoration-none nav-link" to={"/shop"}>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="px-2 text-reset text-decoration-none nav-link" to={"/cart"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <Navbar bg="white" variant="light" expand="lg" className="pt-2">
                <div className="container">
                    <Navbar.Brand className="" href=""><h1 className="brand-name">
                        <Link to="/">
                            <img style={{ height: "80px" }} src={logo} alt="logo" />
                        </Link>
                    </h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link>
                                <Link class="px-2 text-reset text-decoration-none" to={"/shop"}><h6>SHOP</h6></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link class="px-2 text-reset text-decoration-none" to={"/cart"}><h6>CART</h6></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;