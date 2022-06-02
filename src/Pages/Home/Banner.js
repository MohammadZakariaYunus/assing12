import React from 'react';
import hero from '../../assets/banner/hero.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{
                background: `url(${hero})`
            }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Industrial Automation</h1>
                        <p className="mb-5">Atlas Machinery is one of the world's leading auto parts manufacturers and distributors of Clean Air and Ride Performance products and technology solutions for diversified markets.</p>
                        <button className="btn btn-primary">Get Started</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;