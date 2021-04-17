import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Manageservice = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    const handleDelete = (event, id) => {
        console.log(id);
        const deleteProduct = event.target.parentNode.parentNode;



        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    deleteProduct.style.display = "none"
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">

                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8 bg-light">

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>

                                    <th scope="col">Price</th>
                                    <th scope="col">delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <tr>

                                        <td>{service.name}</td>

                                        <td>$ {service.price}</td>
                                        <th scope="row"><button className="btn btn-primary" onClick={(event) => handleDelete(event, service._id)}>delete</button></th>
                                    </tr>)
                                }



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manageservice;