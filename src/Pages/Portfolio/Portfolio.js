import React from 'react';
import bg from '../../assets/hero.jpg';
import bg2 from '../../assets/bg.jpg';

const Portfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${bg2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <h1 className="mb-5 text-5xl font-bold">I'm Mohammad Zakaria.</h1>
                        <p className='text-2xl'>I'm a Textile Engineer.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200 " style={{ background: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">My Skills</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="badge">HTML</div>
                            <progress className="progress progress-accent w-56" value="80" max="100"></progress>
                            <br />
                            <div className="badge">CSS</div>
                            <progress className="progress progress-accent w-56" value="75" max="100"></progress>
                            <br />
                            <div className="badge">JAVASCRIPT</div>
                            <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                            <br />
                            <div className="badge">Bootstrap</div>
                            <progress className="progress progress-accent w-56" value="85" max="100"></progress>
                            <br />
                            <div className="badge">Tailwind</div>
                            <progress className="progress progress-accent w-56" value="85" max="100"></progress>
                            <br />
                            <div className="badge">REACT</div>
                            <progress className="progress progress-accent w-56" value="75" max="100"></progress>
                            <br />
                            <div className="badge">Firebase</div>
                            <progress className="progress progress-accent w-56" value="60" max="100"></progress>
                            <div className="badge">MongoDB</div>
                            <progress className="progress progress-accent w-56" value="55" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 mx-auto bg-emerald-200 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">My Projects</h2>
                    <div className="btn-group">
                        <button className="btn"><a href="https://chimerical-bunny-467262.netlify.app/" target="blank" >Project 1</a></button>
                        <button className="btn"><a href="https://flourishing-pastelito-74d68d.netlify.app/" target="blank" >Project 2</a></button>
                        <button className="btn"><a href="https://craft-shop.netlify.app/" target="blank" >Project 3</a></button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Portfolio;