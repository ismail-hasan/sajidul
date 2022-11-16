import React from 'react';
import Banner from '../Banner.js/Banner';
import Facility from '../Facility/Facility';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocationPin, MdWifiCalling1 } from 'react-icons/md';
import Service from '../Service/Service';
import TramsInfo from '../TermsInfo/TramsInfo';
import MakeAppoinet from '../../MakeAppoinet/MakeAppoinet';


const Home = () => {

    const allData = [
        {
            name: 'isamil hasan',
            icon: <AiOutlineClockCircle></AiOutlineClockCircle>,
            dec: "hllo welcome jajaj",
            bg: 'bg-primary'

        },
        {
            name: 'khalid khan',
            icon: <MdLocationPin></MdLocationPin>,
            dec: "ay jaah",
            bg: 'bg-[#3A4256]'

        },
        {
            name: 'adfsdf ',
            icon: <MdWifiCalling1></MdWifiCalling1>,
            dec: "vlo hoya jau amsud",
            bg: 'bg-primary'

        },

    ]

    return (
        <div className='w-[1240px] mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-3 gap-10'>
                {
                    allData.map(data => <Facility data={data}></Facility>)
                }
            </div>
            <Service></Service>
            <TramsInfo></TramsInfo>
            <MakeAppoinet></MakeAppoinet>
        </div>
    );
};

export default Home;