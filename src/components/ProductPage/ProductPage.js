import React, { useEffect, useState } from 'react';
import './ProductPage.css'
import { useParams } from 'react-router-dom';
import mockData from '../../mock_data/MOCK_DATA.json';
import Carousel from '../Carousel/Carousel';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AlarmTwoTone } from '@material-ui/icons';

const ProductPage = () => {
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({})
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        mockData.forEach(item => {
            if (item._id === productId) {
                setSelectedProduct(item)
                // setAmount(item.price)
            }
        }, []);
    })

    const getAmount = () => {
        setAmount(quantity * selectedProduct.price)
    }
    const handleIncrease = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
            getAmount()
        }
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            getAmount()
        }
    }

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    // ADD TO CART BUTTON
    const cartItemInfo = { ...selectedProduct, size: size, quantity: quantity }
    const localData = localStorage.getItem('cartItems')
    const previousItems = JSON.parse(localData)
    console.log(previousItems);
    let totalItems;
    if (previousItems) {
        previousItems.push(cartItemInfo)
        totalItems = previousItems
    }
    else {
        totalItems = [cartItemInfo]
    }
    console.log(totalItems);
    const handleAddToCart = () => {
        // console.log(cartItemInfo);
        localStorage.setItem('cartItems', JSON.stringify(totalItems))
        alert("Item Added");
    }
    return (
        <div className="container-fluid pt-5 productPageDiv">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-3 carouselDiv">
                        {/* <Carousel selectedProduct={selectedProduct} /> */}
                        <img className="w-100" src={selectedProduct.img_main} alt="" />
                    </div>
                    <div className="col-md-4 py-3 carouselDiv">
                        {/* <Carousel selectedProduct={selectedProduct} /> */}
                        <img className="w-100 d-none d-xl-block d-lg-block d-md-block" src={selectedProduct.img_curve} alt="" />
                    </div>
                    <div className="col-md-4 p-5 text-center">
                        <h2 className="mb-5">{selectedProduct.name}</h2>
                        <h6>Details</h6>
                        <p>Luxe satin crepe, high-rise, unlined, coral pink midi skirt featuring multicolor waves print throughout, concealed elastic waist, and flattering bias cut.
                            55% Rayon | 45% Viscose.
                            Imported.</p>
                        <h6>Care</h6>
                        <p>Dry Clean Only.</p>
                        <h6>Fit</h6>
                        <p>Recommend ordering true to size.</p>

                        <h6>SIZE</h6>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={size}
                            onChange={handleChange}
                            className="text-start"
                        >
                            <MenuItem value="XS">XS</MenuItem>
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                        </Select>
                        <h6 className="mt-3">QUANTITY</h6>
                        <div className="d-flex justify-content-around align-items-center m-2 border">
                            <p onClick={handleIncrease}>+</p>
                            <p>{quantity}</p>
                            <p onClick={handleDecrease}>-</p>
                        </div>
                        <div className="d-flex justify-content-around border m-2">
                            <p onClick={handleAddToCart}>Add to Cart</p>
                            {/* <p>$ {amount}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;