import React from 'react';
import './Header.css';
import sideImg from '../../../images/header-side.png'

const Header = () => {
  return (

    <section id="hero" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <div className="row">
          <div className="col-md-9">
            <h1 className="text-left">Welcome to <br/> <span>Dhakaiya Barberss</span></h1>
            <h2 className="text-left py-5">We are team of talented Barbers. And Our Goal is to Make you look your best <br />Now it's upon you that You wanted to be at the best stage of yours or not </h2>
            <div class="d-flex">
              <a href="#about" class="btn btn-brand text-white">Get A Hair Cut</a>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Header;