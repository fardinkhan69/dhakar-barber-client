import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://safe-sierra-30196.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))

    }, [])

    return (

        <div className="col-md-4 sidebar-bg">
            <div className="sidebar">
                <div className="row">
                    <div className="col">
                        <h2>Dhakar Barber</h2>
                        <ul className="sidebar-menu">
                            {isAdmin && <div>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/allAppointments'>  <li>Appointment List</li></Link>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/manageService'>  <li>Manage service</li></Link>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/addService'>  <li>Add service</li></Link>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/addAdmin'>  <li>Add Admin</li></Link>
                            </div>}


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