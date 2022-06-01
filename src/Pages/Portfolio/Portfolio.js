import React from 'react';
import bg from '../../assets/hero.jpg';
import bg2 from '../../assets/bg.jpg';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ background: `url(${bg2})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <h1 class="mb-5 text-5xl font-bold">I'm Mohammad Zakaria.</h1>
                        <p>I'm a Textile Engineer</p>

                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-200 " style={{ background: `url(${bg})` }}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">My Skills</h1>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div className="badge">HTML</div>
                            <progress class="progress progress-accent w-56" value="80" max="100"></progress>
                            <br />
                            <div className="badge">CSS</div>
                            <progress class="progress progress-accent w-56" value="75" max="100"></progress>
                            <br />
                            <div className="badge">JAVASCRIPT</div>
                            <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                            <br />
                            <div className="badge">Bootstrap</div>
                            <progress class="progress progress-accent w-56" value="85" max="100"></progress>
                            <br />
                            <div className="badge">Tailwind</div>
                            <progress class="progress progress-accent w-56" value="85" max="100"></progress>
                            <br />
                            <div className="badge">REACT</div>
                            <progress class="progress progress-accent w-56" value="75" max="100"></progress>
                            <br />
                            <div className="badge">Firebase</div>
                            <progress class="progress progress-accent w-56" value="60" max="100"></progress>
                            <div className="badge">MongoDB</div>
                            <progress class="progress progress-accent w-56" value="55" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-96 mx-auto bg-emerald-200 text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">My Projects</h2>
                    <div class="btn-group">
                        <button class="btn"><a href="https://chimerical-bunny-467262.netlify.app/" target="blank" >Project 1</a></button>
                        <button class="btn"><a href="https://flourishing-pastelito-74d68d.netlify.app/" target="blank" >Project 2</a></button>
                        <button class="btn"><a href="https://craft-shop.netlify.app/" target="blank" >Project 3</a></button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Portfolio;