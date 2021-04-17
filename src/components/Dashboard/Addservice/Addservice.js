import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Navbar from '../../Shared/Navbar/Navbar';


import Sidebar from '../Sidebar/Sidebar';

import './Addservice.css'

const Addservice = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imgURL, setImgURL] = useState(null);


    const onSubmit = (data, e) => {
        const serviceData = {
            name: data.name,
            img: imgURL,
            price: data.price,
            description: data.description


        }
        const url = `https://safe-sierra-30196.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log(res))
        console.log(serviceData);
        e.target.reset();
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b4d26ff9fdc7ca22b41ee19941cfbede');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>

                    <div className="col-md-8 p-5 bg-light">
                        <div className="row">
                            <div className="col mt-5">
                                <h3 className="text-left">Add Services</h3>
                            </div>
                        </div>
                        <div className="row mt-5 p-2">
                            <div className="col bg-white p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col">
                                        <label for="product-name" class="form-label">Service Name</label>
                                        <input className="form-control p-2 my-2" type="text" placeholder="name" {...register("name", { required: true })} />
                                        <label for="product-name" class="form-label">Price</label>
                                        <input className="form-control p-2 my-2" type="number" placeholder="price" {...register("price", { required: true })} />
                                        
                                    </div>
                                    <div className="col">
                                    <label for="description" class="form-label"> Upload Image</label>
                                        <input  id="formFile" className="form-control" type="file" placeholder="photo" name="photo" onChange={handleImageUpload} />
                                            <label for="description" class="form-label">description of product</label>
                                            <textarea className="form-control" {...register("description", { required: true })} />
                                        </div>

                                    
                                    

                                    
                                    

                                    <input className="btn btn-primary w-50 mt-5"  type="submit" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addservice;