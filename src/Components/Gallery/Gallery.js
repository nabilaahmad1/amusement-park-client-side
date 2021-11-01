import React from 'react';
import './Gallery.css'
import img1 from '../../Gallery/images.jpg'
import img2 from '../../Gallery/img.jpg'
import img3 from '../../Gallery/img1.jpg'
import img4 from '../../Gallery/img2.jpg'
import img5 from '../../Gallery/img3.jpg'
import img6 from '../../Gallery/img4.jpg'
import img7 from '../../Gallery/img6.jpg'
import img8 from '../../Gallery/img7.jpg'
import img9 from '../../Gallery/img8.jpg'
import img10 from '../../Gallery/img5.png'
import img11 from '../../Images/calico-river-rapids-tileimage.jpg'
import img12 from '../../Images/nof4ab-128.knottstimeline.me.031515.jpg'

const Gallery = () => {
    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Gallery</h1>
            </div>
            <div className="row">
                <div className="column">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img9} alt="" />
                </div>
                <div className="column">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img10} alt="" />
                </div>
                <div className="column">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img11} alt="" />
                </div>
                <div className="column">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img12} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;