import React from 'react';

const Banner = () => {
    return (
        <div className="w-full ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/199wVJR/bgt-removebg-preview.png" className=" w-3/5 h-[499px]  rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold">Buy and Sell Your Tv!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>




    );
};

export default Banner;