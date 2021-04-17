import React from 'react';
import teamMem1 from '../../../images/barber-men.jpg';
import './Team.css'

const Team = () => {
    return (
        <div class="team-grid mt-5">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center">Our Team </h2>
                    <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet.  </p>
                </div>
                <div class="row people">
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style={{backgroundImage:`url(${teamMem1})`}}>
                            <div class="cover">
                                <h3 class="name">Ben Johnson</h3>
                                <p class="title">Hair Styist</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style={{backgroundImage:`url(${teamMem1})`}}>
                            <div class="cover">
                                <h3 class="name">Emily Clark</h3>
                                <p class="title">Beared Speacalist </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style={{backgroundImage:`url(${teamMem1})`}}>
                            <div class="cover">
                                <h3 class="name">Carl Kent</h3>
                                <p class="title">Tatto Specalist </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 item">
                        <div class="box" style={{backgroundImage:`url(${teamMem1})`}}>
                            <div class="cover">
                                <h3 class="name">Felicia Adams</h3>
                                <p class="title">Master Barber </p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;