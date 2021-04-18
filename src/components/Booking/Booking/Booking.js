import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import PaymentSystem from '../../Shared/PaymentSystem/PaymentSystem';

const Booking = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [bookingInfo, setBookingInfo] = useState({})
    const { id } = useParams()
    const url = `https://safe-sierra-30196.herokuapp.com/booking/${id}`;
    // console.log(url)
    // console.log(id)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setBookingInfo(data)
            })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);
    const onSubmit = (data, e) => {
        const bookingData = {
           customerName:data.name,
           date:data.date,
           email:loggedInUser.email,
           status:false,
           serviceId: bookingInfo._id,
           serviceName:bookingInfo.name,
           serviceImg:bookingInfo.img,
           servicePrice:bookingInfo.price,
           serviceDescription:bookingInfo.description,
           bookedDate:new Date()



        }
        console.log(bookingData)
        const url = `https://safe-sierra-30196.herokuapp.com/booked`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => console.log(res))
        console.log(bookingData);
        e.target.reset();
    };



    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8">
                        <h2 className="pt-5">Book Appointment</h2>
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="mt-5">Service Name : {bookingInfo.name} </h2>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col">
                                        <label for="product-name" class="form-label">Your Name</label>
                                        <input className="form-control p-2 my-2" type="text" placeholder="name" {...register("name", { required: true })} />
                                        
                                    </div>
                                    <div className="col">
                                    <label for="product-name" class="form-label">Date You Want to come</label>
                                    <input className="form-control p-2 my-2"  type="date" placeholder="date" {...register("date", {required: true})} />
                                    </div>

                                    <div className="container mt-5">
                                    <PaymentSystem></PaymentSystem>
                                    </div>





                                    <input className="btn btn-primary w-50 mt-5" type="submit" />
                                </form>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;