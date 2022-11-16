import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, dec, img } = service
    return (
        <div className='mt-8'>
            <img className='w-1/3 h-[130px] mx-auto' src={img} alt="" />
            <h1 className='text-2xl font-semibold py-4'>{name}</h1>
            <p>{dec}</p>
        </div>
    );
};

export default ServicesCard;