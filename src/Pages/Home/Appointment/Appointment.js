import React from 'react';
import doctor1 from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className="flex align-center items-center mt-10">

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor1} />
            </div>
            <div className='flex-1 p-5'>
                <h5 className='text-primary font-bold mb-3 '>Appointment</h5>
                <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
        </section>
    );
};

export default Appointment;