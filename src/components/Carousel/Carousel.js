import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Carousel = ({ selectedProduct }) => {
    let reactSwipeEl;

    return (
        <div className="row">
            <div className="col-md-1 d-flex align-items-center">
                <button className="border-0" onClick={() => reactSwipeEl.prev()}><ArrowBackIosIcon /></button>
            </div>
            <div className="col-md-10">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    <div className="d-flex justify-content-center">
                        <img src={selectedProduct.img_main} alt="" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={selectedProduct.img_curve} alt="" />
                    </div>
                </ReactSwipe>
            </div>
            <div className="col-md-1 d-flex align-items-center">
                <button className="border-0" onClick={() => reactSwipeEl.next()}><ArrowForwardIosIcon /></button>
            </div>
        </div>
    );
};

export default Carousel;