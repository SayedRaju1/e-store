import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-end text-white container">
                <Typography>LOGIN</Typography>
                <Typography className="ms-3">CREATE ACCOUNT</Typography>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container d-flex justify-content-between">
                    <div >
                        <Link to="/">
                            <img style={{ height: "50px" }} src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;