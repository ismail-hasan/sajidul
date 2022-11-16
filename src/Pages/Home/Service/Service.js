import React from 'react';
import img1 from '../../../assets/images/cavity.png'
import img2 from '../../../assets/images/fluoride.png'
import img3 from '../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Service = () => {

    const servicesData = [

        {
            id: 1,
            name: "Fluoride Treatment",
            img: img1,
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            name: "Fluoride Treatment",
            img: img2,
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            name: "Fluoride Treatment",
            img: img3,
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }

    ]
    return (
        <div className='text-center py-20 text-black ' >
            <p className='text-secondary font-semibold text-lg'>OUR SERVICES</p>
            <h1 className='font-semibold text-3xl'>Services We Provide</h1>
            <div className='grid grid-cols-3 gap-10 pt-10'>
                {
                    servicesData.map(service => <ServicesCard key={service.id} service={service} ></ServicesCard>)
                }
            </div>
        </div >
    );
};

export default Service;