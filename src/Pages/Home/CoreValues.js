import React from 'react';
import hero from '../../../src/assets/core/core_values_bg.jpg'
import signature from '../../../src/assets/core/signature.png'

const CoreValues = () => {
    return (
        <div className='my-7'>
            <div className="hero max-h-96" style={{ background: `url(${hero})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="my-5 text-3xl font-bold">OUR CORE VALUES</h1>
                        <h5 className='text-info text-xl mb-3'>WRITTEN BY Wholesale Dealers CEO</h5>
                        <p className="mb-5">Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that t dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.</p>
                        <img className='mt-5 mx-auto' src={signature} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoreValues;