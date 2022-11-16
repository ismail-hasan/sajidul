import React from 'react';
import img from '../../assets/images/doctor.png'
import './appoinment.css'

const MakeAppoinet = () => {
    return (
        <div className=' flex appoinment items-center mt-40'>
            <div className='w-[50%] -mt-40 hidden lg:flex'>
                <img className='' src={img} alt="" />
            </div>
            <div className='w-[50%]'>
                <p className='text-lg text-blue-500'>Appointment</p>
                <h2 className='text-3xl font-semibold my-3'>Make an appointment Today</h2>
                <h1 className='text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h1>
                <button className='text-lg capitalize bg-sky-500 py-2 px-5 mt-5'>getting stared</button>
            </div>

        </div>
    );
};

export default MakeAppoinet;