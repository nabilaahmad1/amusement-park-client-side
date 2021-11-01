import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [services, setServices] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);

    // showing all users order 
    useEffect(() => {
        fetch('https://serene-journey-45291.herokuapp.com/manageallorders')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [deleteCount])

    // delete an user order 
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are You Sure!! You Want to Cancel the Order? ");
        if (proceed) {
            fetch(`https://serene-journey-45291.herokuapp.com/manageallorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => setDeleteCount(data));
        }
    }
    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Manage All Order</h1>
            </div>
            <h2 className="text-dark">Total No. of Order: {services.length}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => <div className="col-12 mb-4"
                    key={service._id}
                >
                    <div className="card background1 py-3">
                        <div className="card-body">
                            <h4 className="text-light">User Details</h4>
                            <h5 className="text-light">User Name: {service?.userName}</h5>
                            <h5 className="text-light">Email: {service?.email}</h5>
                            <h4 className="text-light mt-5">Ride Details</h4>
                            <h5 className="card-title text-light">Ride Name: {service?.rideName}</h5>
                            <h5 className="card-title text-light ">Ride No: {service?.key}</h5>
                            <button onClick={() => { handleDeleteOrder(service._id) }} className="btn btn-light rounded-pill mt-3 px-5 me-3">Delete</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default ManageOrder;