import React from 'react';
import './Featured.css'
import mockData from '../../mock_data/MOCK_DATA.json';
import ItemCard from '../ItemCard/ItemCard';


const Featured = () => {
    // console.log(mockData);
    return (
        <div className="container">
            <h1 className="text-center">Featured Items</h1>
            <div className="row p-0 m-0">
                {
                    mockData.map(item => (
                        <ItemCard key={item._id} item={item}></ItemCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;