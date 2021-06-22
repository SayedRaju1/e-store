import React, { useState } from 'react';
import CartItemCard from '../CartItemCard/CartItemCard'

const Cart = () => {
    const localData = localStorage.getItem('cartItems')
    const cartItems = JSON.parse(localData)

    const [cartProducts, setCartProducts] = useState(cartItems)

    const handleRemove = (id) => {
        const newCartArray = [];
        cartItems.forEach(product => {
            if (product._id !== id) {
                newCartArray.push(product)
            }
        });
        setCartProducts(newCartArray)
        localStorage.setItem('cartItems', JSON.stringify(newCartArray))
    }
    return (
        <div className="container">
            {
                cartProducts.length >= 1 ? <h1 className="text-center">This is Your Cart</h1> : <h1 className="text-center">Cart is empty</h1>
            }
            {
                cartProducts.map(item => (
                    <CartItemCard key={item._id} item={item} handleRemove={handleRemove}></CartItemCard>
                ))
            }
        </div>
    );
};

export default Cart;