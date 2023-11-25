import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = (<>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/schedules'>Schedules</Link>
                </li>
                <li>
                    <Link to='/membership'>Membership</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
        </>)
    return (
        <div>
            <nav className='navbar'>
                <ul className='ul-list'>
                    {navItems}

                </ul>
                <div className='nav-toggle small-nav-toggle' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <FaTimes/> : <HiOutlineMenuAlt1/>
                }
                </div>
            <div className='button-div'>
                <p className='offer'> Offer </p>
                <button className='courses-btn'>Courses</button>
            </div>
            {
                isOpen ? <>
                    <div className='small-nav'>
                        <div className='small-nav-bar'>
                            <div className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <FaTimes/> : <HiOutlineMenuAlt1/>
                        }
                            </div>
                        </div>
                        <div className='small-navlist'>
                            {navItems}
                        </div>
                    </div>
                </> : <></>
            }
            </nav>
        </div>
    );
};

export default Header;