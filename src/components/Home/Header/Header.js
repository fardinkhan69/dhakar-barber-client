import React from 'react';
import './Header.css';
import sideImg from '../../../images/header-side.png'

const Header = () => {
    return (
        // <div>
        //     <section class="h-100 cc_cursor">
        //     <div class="position-absolute h-100 w-100 header-top-style" ></div>
        //     <div class="container h-100 py-5 cc_cursor">
        //         <div class="row h-100 justify-content-between align-items-center cc_cursor">
        //             <div class="col-lg-5 h-50 cc_cursor">
        //                 <div class="d-flex flex-column h-100 justify-content-between text-center text-lg-left cc_cursor">
        //                     <h5>What business are you?</h5>
        //                     <h1 class="font-weight-bold cc_cursor">
        //                         Main hero message to sell yourself
        //                     </h1>
        //                     <h5 class="text-muted font-weight-normal">
        //                         Sub hero message lead. How would you benefit the
        //                         customer. Short and crisp.
        //                     </h5>
        //                     <div class="">
        //                         <div class="btn btn btn-primary">
        //                             Subscribe now
        //                         </div>
        //                         <div class="btn btn ml-3 btn-outline-primary">
        //                             Learn more
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="col-lg-5 mt-3 mt-lg-0 cc_cursor">
        //                 <img src={sideImg} class="h-100 w-100 cc_cursor" alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </section>
        // </div>
        <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <h1 className="text-left">Welcome to <span>Dhakaiya Salon</span></h1>
          <h2 className="text-left">We are team of talented Barbers. And Our Goal is to Make you look your best</h2>
          <div class="d-flex">
            <a href="#about" class="btn btn-brand text-white">Get A Hair Cut</a>

          </div>
        </div>
      </section>
        
    );
};

export default Header;