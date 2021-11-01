import React from 'react';
import useService from '../../Hook/useService';
import Rides from '../Rides/Rides';

const Ride = () => {
    const [services] = useService();
    return (
        <div className="container-fluid">
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder mt-5">Our Rides</h1>
            </div>
            {/* mapping for show services  */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Rides
                        key={service._id}
                        service={service}
                    >
                    </Rides>
                    )
                }
            </div>
        </div>
    );
};

export default Ride;