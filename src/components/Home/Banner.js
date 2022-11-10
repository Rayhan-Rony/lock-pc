import React from 'react';
import bannerimg from '../../assets/computer-pic-22.webp'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerimg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-6xl font-extrabold">PC and Network Security</h1>
                    <p className="mb-5 text-xl">I am your leader in remote assistance!</p>
                    <p className="mt-10 text-xl">Safe Pc solutions is a leader in remote assistance:diagnose and identify computer issues remotely.It is much more convenient than taking computer to the store to be fixed.I offer monthly technical support packages at a very low price.Call me today and see how i can help your computer perform at its best!</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;