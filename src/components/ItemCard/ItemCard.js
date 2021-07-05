import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { CurveContext } from '../../App';

const ItemCard = ({ item }) => {
    const [curve, setCurve] = useContext(CurveContext)
    return (
        <div className="col-md-4 col-sm-6 col-6 p-md-5 p-lg-5 p-xl-5">
            <Link className="text-reset text-decoration-none" to={"/product/" + item._id}>
                <div className="p-0 m-0">
                    {
                        curve ? <img className="w-100" src={item.img_curve} alt="" /> :
                            <img className="w-100" src={item.img_main} alt="" />
                    }
                </div>

                <div className="p-0 mt-3">
                    <p className="text-center">{item.name}</p>
                    <p className="text-center">${item.price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;