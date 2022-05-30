import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Hello there</h1>
                        <h1 class="text-3xl ">I am Zakaria</h1>
                        <p class="py-6">I Am a Textile Engineer</p>
                    </div>
                </div>
            </div>
            <div className='min-h-screen'>
                <h1 className='text-center text-2xl font-bold'>My Skils</h1>
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">JAVASCRIPT</div>
                <div class="badge">Material UI</div>
                <div class="badge">Bootstrap</div>
                <div class="badge">Tailwind</div>
                <div class="badge">REACT</div>
                <div class="badge">Firebase</div>
            </div>
            <p>My Projects</p>
            <a href="">Project 1</a>
            <a href="">Project 2</a>
            <a href="">Project 3</a>

        </div>
    );
};

export default Portfolio;