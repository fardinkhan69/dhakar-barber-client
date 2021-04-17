import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';




const Testimonials = () => {

    const [testimonials,setTestimonials] = useState([])

    useEffect(() => {
        fetch(`https://safe-sierra-30196.herokuapp.com/testimonials`)
        .then(res => res.json())
        .then(data =>{
            setTestimonials(data)
        })
    },[])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h2>What Our Customers <br/> Says </h2>
               </div>
               <div className="row mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;