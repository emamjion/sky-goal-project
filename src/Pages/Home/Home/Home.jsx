import React from 'react';
import Banner from '../Banner/Banner';
import Advanture from '../Advanture/Advanture';
import Destination from '../Destination/Destination';
import Discount from '../Discount/Discount';
import Book from '../Book/Book';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advanture/>
            <Destination/>
            <Discount/>
            <Book/>
        </div>
    );
};

export default Home;