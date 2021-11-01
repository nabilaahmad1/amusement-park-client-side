import React from 'react';
import { Link } from 'react-router-dom';
import './Rides.css'

const Rides = (props) => {
    // data distructing
    const { _id, serviceName, img, description, price } = props.service;
    return (
        <div className="col">
            {/* ridess details  */}
            <div className="card h-100 background1">
                <img src={img} className="card-img-top " alt="" height="300" />
                <div className="card-body">
                    <h5 className="card-title title lh-base fw-bolder ">{serviceName}</h5>
                    <p className="card-text text-light lh-sm mt-3 ">{description}</p>
                    <p className="card-text text-light lh-sm mt-3">Ride Price: ${price}</p>
                    <Link to={`/ridedetail/${_id}`}>
                        <button className="btn btn-light rounded-pill mt-3 px-5" type="button">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Rides;