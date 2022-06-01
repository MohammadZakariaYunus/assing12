import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <h1 className="text-3xl ">I am Zakaria</h1>
                        <p className="py-6">I Am a Textile Engineer</p>
                    </div>
                </div>
            </div>
            <div className='min-h-screen'>
                <h1 className='text-center text-2xl font-bold'>My Skils</h1>
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
                <div className="badge">JAVASCRIPT</div>
                <div className="badge">Material UI</div>
                <div className="badge">Bootstrap</div>
                <div className="badge">Tailwind</div>
                <div className="badge">REACT</div>
                <div className="badge">Firebase</div>
            </div>
            <p>My Projects</p>
            <a href="">Project 1</a>
            <a href="">Project 2</a>
            <a href="">Project 3</a>

        </div>
    );
};

export default Portfolio;