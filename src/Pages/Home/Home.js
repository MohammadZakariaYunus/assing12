import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
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
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
        </div>
    );
};

export default Home;