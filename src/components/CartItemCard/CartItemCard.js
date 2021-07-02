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
                <div className="col-md-3 col-5">
                    <Link className="d-flex justify-content-center align-items-center text-reset" to={"/product/" + item._id}>
                        <img className="w-75 py-3 img-fluid" src={item.img_main} alt="" />
                    </Link>
                </div>
                <div className="col-md-9 col-7  d-flex justify-content-center flex-column">
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
                    <p className="d-md-none d-xs-block d-sm-block">Price: $ {item.price}</p>
                </div>
            </div>
            <div className="col-md-6 row d-flex align-items-center">
                <div className="col-md-4 col-6 d-none d-md-block">
                    <p className="d-xs-block d-sm-block d-md-none">Price:</p>
                    <p> ${item.price}</p>
                </div>
                <div className="col-md-4 col-8 d-flex justify-content-start">
                    <p className="d-xs-block d-sm-block d-md-none">Quantity:</p><br />
                    <p className="">
                        <span className="px-2" style={{ cursor: "pointer" }} onClick={quantityPlus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </span>
                        {quantity}
                        <span className="px-2" style={{ cursor: "pointer" }} onClick={quantityMinus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                        </span>
                    </p>
                </div>
                <div className="d-flex col-md-4 col-4 justify-content-around align-items-center">
                    <p className="d-xs-block d-sm-block d-md-none">Total:</p>
                    <p>${itemTotal}</p><br />
                    <p onClick={() => handleRemove(item.cartId)} className="px-2" style={{ cursor: "pointer" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default CartItemCard;