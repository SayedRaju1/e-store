import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CartItemCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SubTotalContext } from '../../App';

const CartItemCard = ({ item, handleRemove, trigger }) => {
    const [subTotal, setSubTotal] = useContext(SubTotalContext)
    const [quantity, setQuantity] = useState(item.quantity)
    const [itemTotal, setItemTotal] = useState(item.price * item.quantity)

    const localData = localStorage.getItem('cartItems')
    const cartItems = JSON.parse(localData)
    const [cartProducts, setCartProducts] = useState(cartItems)


    const quantityPlus = () => {
        setQuantity(quantity + 1)
        setItemTotal((quantity * item.price) + item.price)
        cartItems.forEach((product, index, array) => {
            if (product._id === item._id) {
                array[index] = ({ ...product, item_total: (quantity * item.price) + item.price, quantity: quantity + 1 });
                localStorage.setItem('cartItems', JSON.stringify(array))
            }
        })
        trigger()

    }
    const quantityMinus = () => {
        setQuantity(quantity - 1)
        setItemTotal((quantity * item.price) - item.price)
        cartItems.forEach((product, index, array) => {
            if (product._id === item._id) {
                array[index] = ({ ...product, item_total: (quantity * item.price) - item.price, quantity: quantity - 1 });
                localStorage.setItem('cartItems', JSON.stringify(array))
            }
        })
        trigger()
    }

    return (
        <div className="row cartItemCardDiv border-bottom">
            <div className="col-md-6 row">
                <div className="col-md-3  ">
                    <Link className="d-flex justify-content-center align-items-center text-reset" to={"/product/" + item._id}>
                        <img className="w-75 py-3 img-fluid" src={item.img_main} alt="" />
                    </Link>
                </div>
                <div className="col-md-9  d-flex justify-content-center flex-column">
                    <h6>{item.name}</h6>
                    <p>{item.size}</p>
                </div>
            </div>
            <div className="col-md-6 row  d-flex align-items-center">
                <div className="col-md-4">
                    <p>${item.price}</p>
                </div>
                <div className="col-md-4 d-flex">
                    <p style={{ cursor: "pointer" }} onClick={quantityPlus}>+</p>
                    <p className="px-3">{quantity}</p>
                    <p style={{ cursor: "pointer" }} onClick={quantityMinus}>-</p>
                </div>
                <div className="d-flex col-md-4">
                    <p>${itemTotal}</p>
                    <p onClick={() => handleRemove(item._id)} className="px-2 mx-2 " style={{ cursor: "pointer" }}>Remove</p>
                </div>
            </div>
        </div>


    );
};

export default CartItemCard;