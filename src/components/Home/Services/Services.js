import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [services,setServices] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(data =>{
            setServices(data)
        })
    },[])

    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <h5>Salon Services</h5>
                    <h2>Our Services</h2>
                </div>
                <div className="row">
                    {
                        services.map(serviceInfo => <ServiceCard serviceInfo={serviceInfo}></ServiceCard> )
                    }
                </div>
            </div>
           
        </section>
    );
};

export default Services;