import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoServiceCard from './AppoServiceCard';
import AppoServiceModal from './AppoServiceModal';

const AvailAbleService = ({ selectedDate }) => {
    const [serviceCards, setServiceCards] = useState([])

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setServiceCards(data))
    }, [])


    return (
        <div className='text-black my-20'>
            {selectedDate ?
                <p className='text-center capitalize text-3xl font-semibold'>new date is {format(selectedDate, "PP")}</p>
                :
                <p className='text-center capitalize text-3xl font-semibold'>no dete selected</p>
            }
            <div className='grid grid-cols-3 gap-10 text-center px-[60px] mt-10'>
                {
                    serviceCards.map(serviceCard => <AppoServiceCard
                        serviceCard={serviceCard}  
                    ></AppoServiceCard>)
                }
                <AppoServiceModal></AppoServiceModal>
                
            </div>
        </div>

    );
};

export default AvailAbleService;