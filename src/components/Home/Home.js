import React from 'react';
import './Home.css'
import mockData from '../../mock_data/MOCK_DATA.json';
import ItemCard from '../ItemCard/ItemCard';

const Home = () => {
    return (
        <div className="container-fluid bg-light m-0 p-0">
            <div className="banner-img-div d-flex align-items-center">
                <div className="container pt-5">
                    <h1 className="text-white align-self-center pt-5">
                        SABEN: Tea Rose Launching Tomorrow !!!</h1>
                </div>
            </div>
            <div className="container pt-5">
                <h1 className="text-center pt-5">Featured Items</h1>
                <div className="row p-0 m-0">
                    {
                        mockData.filter(product => product.featured === true).map(item => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;