import React from 'react';
import img1 from '../../../assets/pic1.jpg';

import img2 from '../../../assets/pic2.jpg';
import img3 from '../../../assets/pic3.jpg';
const Banner = () => {
    return (
        <div className="hero py-10" style={{ backgroundImage: `url("https://i.ibb.co/Z6n59p7/New-Project-1.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-8">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>




    );
};

export default Banner;