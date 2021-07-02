import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SubTotalContext } from '../../App';
import CartItemCard from '../CartItemCard/CartItemCard'

const Cart = () => {
    const [subTotal, setSubTotal] = useContext(SubTotalContext)

    const localData = localStorage.getItem('cartItems')
    const cartItems = JSON.parse(localData)
    const [cartProducts, setCartProducts] = useState(cartItems)
    const [triggerBtn, setTriggerBtn] = useState(true)

    const trigger = () => {
        setTriggerBtn(!triggerBtn)
        console.log(triggerBtn);
    }

    useEffect(() => {
        const localData2 = localStorage.getItem('cartItems')
        const cartItems2 = JSON.parse(localData2)
        const itemTotalArray = []
        if (cartItems2) {
            cartItems2.forEach(product => {
                itemTotalArray.push(product.item_total)
            })
        }
        const add = arr => arr.reduce((a, b) => a + b, 0);
        const sum = add(itemTotalArray);
        console.log(sum)
        setSubTotal(sum)
    }, [triggerBtn])




    const handleRemove = (id) => {
        const newCartArray = [];
        cartItems.forEach(product => {
            if (product.cartId !== id) {
                newCartArray.push(product)
            }
        });
        setCartProducts(newCartArray)
        localStorage.setItem('cartItems', JSON.stringify(newCartArray))
        setTriggerBtn(!triggerBtn)
    }

    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container pt-5">
                {
                    cartProducts && cartProducts.length > 0 ? <h1 className="text-center pt-5">This is Your Cart</h1> :
                        <h1 className="text-center py-3">Cart is empty</h1>
                }
                {
                    cartProducts && cartProducts.length > 0 ?
                        <div className="row text-center border-bottom mt-5 d-none d-md-flex">
                            <div className="col-md-5">
                                < h6 style={{ position: 'relative', right: "90px" }}>Item</ h6>
                            </div>
                            <div className="col-md-7 row">
                                <div className="col-md-4">< h6 style={{ position: 'relative', right: "10px" }}>Price</ h6></div>
                                <div className="col-md-4">< h6 style={{ position: 'relative', right: "20px" }}>Quantity</ h6></div>
                                <div className="col-md-4">< h6 style={{ position: 'relative', right: "55px" }}>Total</ h6></div>
                            </div>
                        </div>
                        :
                        ''
                }

                {
                    cartProducts && cartProducts.length > 0 ? cartProducts.map(item => (
                        <CartItemCard key={item._id} item={item} handleRemove={handleRemove} trigger={trigger}></CartItemCard>
                    )) : ""
                }
                <div className="d-flex justify-content-end p-3 m-3">
                    {
                        cartProducts && cartProducts.length > 0 ?
                            <div className="col-md-5 col-12 col-sm-8 d-flex flex-column ">
                                <div className="d-flex justify-content-between border-bottom p-2">
                                    <h5>Subtotal:</h5>
                                    <h5>$ {subTotal}</h5>
                                </div>
                                <div className="d-flex justify-content-between border-bottom p-2">
                                    <h6>Shipping:</h6>
                                    <h6>Free</h6>
                                </div>
                                <div className="d-flex justify-content-between border-bottom p-2">
                                    <h6>Tax(7.5%):</h6>
                                    <h6>$ {((subTotal * 1.075) - subTotal).toFixed(2)}</h6>
                                </div>
                                <div className="d-flex justify-content-between p-2">
                                    <h4>You will Pay:</h4>
                                    <h4>$ {(subTotal * 1.075).toFixed(2)}</h4>
                                </div>
                                <div className="d-md-flex justify-content-md-end p-2">
                                    <div style={{ cursor: 'pointer' }} onClick={() => alert("work in progress")}
                                        className="bg-dark p-3 text-center text-white">
                                        Checkout
                                    </div>
                                </div>

                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;