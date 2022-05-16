import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Servicess from '../Servicess/Servicess';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Servicess></Servicess>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;