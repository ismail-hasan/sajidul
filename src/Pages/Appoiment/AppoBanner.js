import { DayPicker } from 'react-day-picker';
import img from '../../assets/images/chair.png'

const AppoBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='flex justify-evenly mt-5 items-center text-black'>
            <div className='w-1/3'>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                >
                </DayPicker>
               
            </div>
            <div className='w-1/3'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default AppoBanner;