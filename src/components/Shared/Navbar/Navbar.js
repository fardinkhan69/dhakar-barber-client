import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        // <div>
        //     <nav class="navbar navbar-expand-lg navbar-light container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>

        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav ml-auto">
        //                 <li class="nav-item active">
        //                     <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link mr-4" href="#">About</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link mr-4" href="#">Dental Service</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link mr-4" href="#">Reviews</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link mr-4" href="#">Blogs</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link mr-4" href="#">Contact Us</a>
        //                 </li>


        //             </ul>

        //         </div>
        //     </nav>
        // </div>
        <header id="header" class="d-flex align-items-center bg-dark">
            <div class="container d-flex align-items-center justify-content-between">

                <h1 class="logo">Dhakar Barber<span>.</span></h1>



                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><a class="nav-link scrollto" href="#services">Services</a></li>
                        <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a class="nav-link scrollto" href="#team">Team</a></li>
                        
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    );
};

export default Navbar;