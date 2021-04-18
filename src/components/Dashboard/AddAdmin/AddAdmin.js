import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    const [adminMail,setAdminMail] = useState(null);
    
    const onSubmit = (data, e) => {
        const adminData = {
            email : data.email


        }
        const url = `https://safe-sierra-30196.herokuapp.com/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log(res))
        console.log(adminData);
        e.target.reset();
    };



    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8">
                        <div className="container mt-5 pt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" className="form-control" placeholder="email" {...register("email", { required: true })} />

                                <input type="submit" className="btn btn-brand mt-5" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;