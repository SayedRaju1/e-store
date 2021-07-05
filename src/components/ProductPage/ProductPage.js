import React, { useEffect, useState } from 'react';
import './ProductPage.css'
import { useParams } from 'react-router-dom';
import mockData from '../../mock_data/MOCK_DATA.json';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CurveContext } from '../../App';
import { useContext } from 'react';

const ProductPage = () => {
    const [curve, setCurve] = useContext(CurveContext)
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({})
    const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        mockData.forEach(item => {
            if (item._id === productId) {
                setSelectedProduct(item)
                // setAmount(item.price)
            }
        }, []);
    })

    const quantityPlus = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
        else { alert("You can buy maximum 10 of this product.") }
    }
    const quantityMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    // ADD TO CART BUTTON
    const cartItemInfo = {
        ...selectedProduct,
        size: size,
        quantity: quantity,
        item_total: quantity * selectedProduct.price,
        cartId: Math.floor((Math.random() * 99999999999) + 10000)
    }
    const localData = localStorage.getItem('cartItems')
    const previousItems = JSON.parse(localData)
    // console.log(previousItems);
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
        localStorage.setItem('cartItems', JSON.stringify(totalItems))
        handleClick()
    }

    //SNACKBAR
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div className="container-fluid pt-5 bg-light ">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-md-4 py-3 carouselDiv">
                        {
                            curve ? <img className="w-100" src={selectedProduct.img_curve} alt="" /> :
                                <img className="w-100" src={selectedProduct.img_main} alt="" />
                        }
                    </div>
                    <div className="col-md-4 py-3 carouselDiv d-none d-xl-block d-lg-block d-md-block">
                        {
                            curve ? <img className="w-100" src={selectedProduct.img_main} alt="" /> :
                                <img className="w-100 " src={selectedProduct.img_curve} alt="" />
                        }
                    </div>
                    <div className="col-md-4 p-5 text-center">
                        <h2 className="mb-5">{selectedProduct.name}</h2>
                        <h6>Details</h6>
                        <p>Luxe satin crepe, high-rise, unlined, coral pink midi skirt featuring multicolor waves print throughout, concealed elastic waist, and flattering bias cut.
                            55% Rayon | 45% Viscose.
                            Imported.</p>

                        <h6 className="mt-5">SIZE</h6>
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
                        <h6 className="mt-5">QUANTITY</h6>
                        <div className="d-flex justify-content-center">
                            <div className="quantity d-flex align-items-center w-50 pt-3 justify-content-around border border-secondary">
                                <p style={{ cursor: "pointer" }} onClick={quantityPlus}>+</p>
                                <p >{quantity}</p>
                                <p style={{ cursor: "pointer" }} onClick={quantityMinus}>-</p>
                            </div>
                        </div>

                        <div style={{ cursor: "pointer" }} onClick={handleAddToCart}
                            className="add-cart-btn d-flex pt-3 justify-content-around align-items-center border mt-3 border-secondary">
                            <p >Add to Cart</p>
                            <p>${quantity * selectedProduct.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SNACKBAR */}
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}

                >
                    <SnackbarContent
                        aria-describedby="message-id2"
                        className="text-center"
                        message={
                            <span id="message-id2">
                                <div className="text-center">Item Added to Cart</div>
                            </span>
                        }
                    />
                </Snackbar>
            </div>
        </div>
    );
};

export default ProductPage;