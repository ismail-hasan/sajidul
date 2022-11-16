import React from 'react';
import img from '../../../assets/images/treatment.png'

const TramsInfo = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <img className='rounded w-[70%] mx-auto' src={img} alt="" />
            </div>
            <div className='w-1/2 text-black'>
                <h1 className='text-4xl mb-3 leading-[1.5]'>Exceptional Dental Care, on Your Terms</h1>
                <p className='text-lg mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="text-white btn btn-info">GET STARED</button>
            </div>

        </div>
    );
};

export default TramsInfo;