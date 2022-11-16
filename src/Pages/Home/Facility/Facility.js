import React from 'react';
import { MdLocationPin } from 'react-icons/md';

const Facility = ({ data }) => {

    const { name, icon, dec, bg } = data
    return (
        <div className={`${bg} flex  items-center p-5 rounded-md`}>
            <div>
                <p className='text-6xl text-white'>{icon}</p>
            </div>
            <div className='py-5 pl-3'>
                <h1 className='text-3xl font-semibold capitalize'>{name}</h1>
                <p className='text-lg'>{dec}</p>
            </div>
        </div>


    );
};

export default Facility;