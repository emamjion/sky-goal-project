import React from 'react';
import img from '../../../Pages/Home/../../assets/images/Group 167.png'
import './Book.css';
const Book = () => {
    return (
        <div className='book-container'>
            <div className='book-leftside'>
                <img src={img} />
            </div>
            <div className='book-rightside'>
                <h3>Book Now</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <form action="">
                    <div className='input-box'>
                        <label>City</label>
                        <input type="text" name="" id="city" />
                    </div>
                    <div className='inputbox-2'>
                        <div>
                            <label>ARRIVAL</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label>DEPTURE</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='calculate-box'>
                        <div>
                            <label>Star</label>
                            <div>
                                <span>-</span> <span>0</span> <span>+</span>
                            </div>
                        </div>
                        <div>
                            <label>Room</label>
                            <div>
                                <span>-</span> <span>0</span> <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Book;