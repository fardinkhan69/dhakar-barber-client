import React from 'react';

const BookedCard = ({booking}) => {
    return (
        <div class="col-lg-6 col-md-6 sm-padding mt-5" >
            <div class="service_box">
                <div className="img-box">
                    <img src={booking.serviceImg} alt="" className="img-fluid" />
                </div>
                <h3>{booking.serviceName}</h3>
                <small>{booking.servicePrice}</small>
                <p>{booking.serviceDescription}</p>
            </div>
        </div>
    );
};

export default BookedCard;