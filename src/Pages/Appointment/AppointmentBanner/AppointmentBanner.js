import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-36">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <DayPicker
                            // className='bg-base-100 shadow-xl w-72 h-76 rounded-lg pt-5 pb-5 mr-10 pr-5'
                            mode="single"
                            selected={date}
                            onDayClick={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;