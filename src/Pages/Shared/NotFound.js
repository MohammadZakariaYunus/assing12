import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/not found/NF-bg.jpg';


const NotFound = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(`/`);

    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">404</h1>
                        <p className="mb-5 text-lg">Sorry,we can't find that page. You'll find loads to explore on the home page.</p>
                        <button onClick={navigateToHome} className="btn btn-primary">Home</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NotFound;