import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Appointments = () => {


    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allBookings`)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">service</th>
                                    <th scope="col">status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map(appointment => <tr>

                                        <td>{appointment.customerName}</td>
                                        <td>{appointment.email}</td>
                                        <td> {appointment.serviceName}</td>
                                        <td>Pending</td>
                                        
                                    </tr>)
                                }


                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;