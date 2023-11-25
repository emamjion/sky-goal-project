import React from 'react';
import img from '../../../assets/images/Group 171.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='text-container'>
                <h4>Discover the beauty of the tropics</h4>
                <h1>Tropical Destinations <span>For Student</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br /> rutrum nisi. A nec nisl vitae 
                </p>
                <button className='sign-btn'>Sign Up</button>
            </div>
            <div className='image-container'>
                <img src={img} />
            </div>
        </div>
    );
};

export default Banner;