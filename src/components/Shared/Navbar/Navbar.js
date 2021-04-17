import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'
const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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

                <h1 class="logo logo-clr">Dhakar Barber<span>.</span></h1>



                <nav id="navbar" class="navbar">
                    <ul>
                        <li><Link to="/" className="nav-link scrollto active">Home</Link> </li>
                        <li><Link to="/addTestimonial" className="nav-link scrollto">Dashboard</Link></li>

                        
                        <li className="nav-item">
                            {
                                loggedInUser?.email ? <span className="nav-link text-white">{loggedInUser.name}</span> : <Link to="/login" className="nav-link"><button className="btn btn-primary site-btn">Login</button></Link>
                            }

                        </li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    );
};

export default Navbar;