import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import BookedCard from '../BookedCard/BookedCard';

const BookedAppointments = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [bookingList, setBookingList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                {
                                    bookingList.map(booking => <BookedCard key={booking._id} booking={booking}></BookedCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedAppointments;