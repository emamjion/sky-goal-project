import React from 'react';
import img1 from '../../../assets/images/Rectangle 25.png';
import img2 from '../../../assets/images/Rectangle 26.png';
import img3 from '../../../assets/images/Rectangle 27.png';
import './Advanture.css';

const Advanture = () => {
    return (
        <div className='advanture-container'>
            <div className='advanture-leftside'>
                <div className='advanture-box'>
                    <img src={img1} />
                    <div className='advanture-box-text'>
                        <h3>Jenny Wilson</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...
                        </p>
                    </div>
                </div>
                <div className='advanture-box'>
                    <img src={img2} />
                    <div className='advanture-box-text'>
                        <h3>Jenny Wilson</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...
                        </p>
                    </div>
                </div>
                <div className='advanture-box'>
                    <img src={img3} />
                    <div className='advanture-box-text'>
                        <h3>Jenny Wilson</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...
                        </p>
                    </div>
                </div>
            </div>
            <div className='advanture-rightside'>
                <h2>Tropical Adventure</h2>
                <h3>for Students.</h3>
                <h4>Student Tropical Vacation: Relax and Recharge</h4>
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
        </div>
    );
};

export default Advanture;