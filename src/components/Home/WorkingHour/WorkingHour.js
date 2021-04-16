import React from 'react';
import './WorkingHour.css';
import sideImg from '../../../images/mostafa-meraji-D4-N4TiF2dc-unsplash.jpg'
const WorkingHour = () => {
    return (
        <section className="working-hour">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div class="table-content aos-init aos-animate" data-aos="fade-up" data-aos-offset="300">
                            <figure class="m-0">
                                <img class="img-fluid w-100 cc_cursor" src={sideImg} alt="table-image" />
                            </figure>
                            <div class="table-img-con text-center cc_cursor">
                                <a class="bg-dark-color cc_pointer" href="assets/demo.mp4" data-fancybox="gallery"><i class="fas fa-play cc_pointer"></i></a>
                                <h2>Complimentry Cold Beverage &amp; Hot Towels</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <div class="barber-item-2 position-relative aos-init aos-animate cc_cursor" >
                            <p class="text-color cc_cursor">CALL NOW - (189 983 837 1)</p>
                            <h3 class="mb-0 cc_cursor">WORKING HOURS</h3>
                            <div class="barber-list-2 cc_cursor">
                                <div class="d-flex w-100 justify-content-between cc_cursor">
                                    <span>MONDAY</span>
                                    <span>09.00-19.00</span>
                                </div>
                                <hr />
                                <div class="d-flex w-100 justify-content-between">
                                    <span>TUESDAY</span>
                                    <span>09.00-19.00</span>
                                </div>
                                <hr />
                                <div class="d-flex w-100 justify-content-between">
                                    <span>FRIDAY</span>
                                    <span>09.00-19.00</span>
                                </div>
                                <hr />
                                <div class="d-flex w-100 justify-content-between">
                                    <span>SATUREDAY</span>
                                    <span>09.00-19.00</span>
                                </div>
                                <hr />
                                <div class="d-flex w-100 justify-content-between">
                                    <span>SUNDAY</span>
                                    <span class="text-danger text-bold">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingHour;