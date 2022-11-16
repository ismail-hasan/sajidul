import React from 'react';
import bannerImg from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero bg-black  py-20 px-5 banner ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="w-1/2 rounded-lg shadow-2xl" alt='bannerImage' />
                <div className='text-black'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary font-semibold text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;