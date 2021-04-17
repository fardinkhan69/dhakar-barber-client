import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (

        <div className="col-md-4 sidebar-bg">
            <div className="sidebar">
                <div className="row">
                    <div className="col">
                        <h2>Dhakar Barber</h2>
                        <ul className="sidebar-menu">
                            <Link style={{ color: '#fff', textDecoration: 'none' }} to='/allAppointments'>  <li>Appointment List</li></Link>
                            <Link style={{ color: '#fff', textDecoration: 'none' }} to='/manageService'>  <li>Manage service</li></Link>
                            <Link style={{ color: '#fff', textDecoration: 'none' }} to='/addService'>  <li>Add service</li></Link>
                            <Link style={{ color: '#fff', textDecoration: 'none' }} to='/addTestimonial'>  <li>Review</li></Link>
                            <Link style={{ color: '#fff', textDecoration: 'none' }} to='/booked'>  <li>Booking List</li></Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;