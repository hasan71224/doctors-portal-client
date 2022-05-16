import React from 'react';
import chair from '../../../../src/assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{background: `url(${bg})`,
        backgroundSize:'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="mr-2 pr-5">
                    <h1 className="text-5xl font-bold">Now Your New Smile Starts Here.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;