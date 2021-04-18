import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials'

import WorkingHour from '../WorkingHour/WorkingHour';
import PaymentSystem from '../../Shared/PaymentSystem/PaymentSystem';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            
            <Team></Team>
            <WorkingHour></WorkingHour>
            <Testimonials></Testimonials>
           
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;