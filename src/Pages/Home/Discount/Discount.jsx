import React from 'react';
import img from '../../../assets/images/Mask group.png'
import './Discount.css';


const Discount = () => {
    return (
        <div className='discount-container'>
            <div className='discount-leftside'>
                <h2>Get 20% off for student</h2>
                <h3>Student discounts available.</h3>
                <h4>Get ready for some fun in the sun!</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </ul>
                <div>
                    <button className='explore-btn'>Explore More</button>
                </div>
            </div>
            <div className='discount-img-div'>
                <img src={img} />
            </div>
        </div>
    );
};

export default Discount;