import React from 'react';
import './Featured.css'
import mockData from '../../mock_data/MOCK_DATA.json';
import ItemCard from '../ItemCard/ItemCard';


const Featured = () => {
    return (
        <div className="container-fluid pt-5 bg-light">
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
        </div>
    );
};

export default Featured;