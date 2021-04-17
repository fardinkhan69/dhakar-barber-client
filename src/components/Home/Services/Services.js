import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="service">
            <div className="container">
                <div className="row mt-5 pt-3 text-center service-headlines">
                    <h5>Salon Services</h5>
                    <h2 className="p-5">OUR BEST SERVICES THAT <br/> WE OFFERING TO YOU</h2>
                </div>
                <div className="row">
                    {
                        services.map(serviceInfo => <ServiceCard serviceInfo={serviceInfo}></ServiceCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;