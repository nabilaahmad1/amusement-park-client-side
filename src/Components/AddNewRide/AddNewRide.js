import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewRide = () => {
    const { register, handleSubmit, reset } = useForm();

    // adding new rides to the database 
    const onSubmit = data => {
        console.log(data);
        axios.post('https://serene-journey-45291.herokuapp.com/rides', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("One Ride Added");
                    reset();
                }
            })
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Add New Ride</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="text" {...register("serviceName")} placeholder="Ride Name" />
                <br />
                <input type="text" {...register("img")} placeholder="Image URL" />
                <br />
                <textarea type="text" {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="Price" />
                <br />
                <input className="btn btn-dark rounded-pill mt-3 px-5" type="submit" value="Add Ride" />
            </form>
        </div>
    );
};

export default AddNewRide;