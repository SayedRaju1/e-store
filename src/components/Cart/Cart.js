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
        <div className="container-fluid bg-light">
            <div className="container">
                {
                    cartProducts && cartProducts.length > 0 ? <h1 className="text-center pt-5">This is Your Cart</h1> :
                        <h1 className="text-center py-3">Cart is empty</h1>
                }
                {
                    cartProducts && cartProducts.length > 0 ? cartProducts.map(item => (
                        <CartItemCard key={item._id} item={item} handleRemove={handleRemove} trigger={trigger}></CartItemCard>
                    )) : ""
                }
                <div className="d-flex justify-content-end">
                    {
                        cartProducts && cartProducts.length > 0 ?
                            <div className="col-md-5 col-12 col-sm-8 d-flex flex-column ">
                                <div className="d-flex justify-content-between">
                                    <h6>Subtotal:</h6>
                                    <h6>$ {subTotal}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Shipping:</h6>
                                    <h6>Free</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Tax(7.5%):</h6>
                                    <h6>$ {((subTotal * 1.075) - subTotal).toFixed(2)}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4>You will Pay:</h4>
                                    {/* <h2>$ {subTotal * 1.075}</h2> */}
                                    <h4>$ {(subTotal * 1.075).toFixed(2)}</h4>
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