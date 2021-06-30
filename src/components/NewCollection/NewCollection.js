import React from 'react';
import mockData from '../../mock_data/MOCK_DATA.json';
import ItemCard from '../ItemCard/ItemCard';

const NewCollection = () => {
    const newProducts = mockData.reverse()
    console.log({ mockData });
    console.log({ newProducts });
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <h1 className="text-center pt-5">New Collection</h1>
                <div className="row p-0 m-0">
                    {
                        mockData.filter(product => product.new === true).reverse().map(item => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NewCollection;