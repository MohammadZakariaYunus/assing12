import React from 'react';
import Banner from './Banner';
import CoreValues from './CoreValues';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CoreValues></CoreValues>
        </div>
    );
};

export default Home;