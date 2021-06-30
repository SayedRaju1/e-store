import React from 'react';
import './Home.css'
import bannerIMG from '../../images/banner.jpg'
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className="container-fluid bg-light m-0 p-0">
            <div className="banner-img-div d-flex align-items-center">
                <div className="container ">
                    <h1 className="text-white align-self-center">SABEN: Tea Rose Launching June 2nd</h1>
                </div>
            </div>
            <Featured />
        </div >
    );
};

export default Home;