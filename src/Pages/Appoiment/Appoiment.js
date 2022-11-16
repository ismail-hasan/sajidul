import React, { useState } from 'react';
import AppoBanner from './AppoBanner';
import AvailAbleService from './AvailAbleService';

const Appoiment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppoBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoBanner>
            <AvailAbleService
                selectedDate={selectedDate}
            ></AvailAbleService>
        </div>
    );
};

export default Appoiment;