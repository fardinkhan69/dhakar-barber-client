import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ serviceInfo }) => {
    return (

        <div class="col-lg-4 col-md-6 sm-padding mt-5" >
            <Link to={`/booking/${serviceInfo._id}`}>
                <div class="service_box">
                    <div className="img-box">
                        <img src={serviceInfo.img} alt="" className="img-fluid" />
                    </div>
                    <h3>{serviceInfo.name}</h3>
                    <small>{serviceInfo.price}</small>
                    <p>{serviceInfo.description}</p>
                </div>
            </Link>
        </div>

    );
};

export default ServiceCard;