import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/404-error.webp'

const PageNotFound = () => {
    return (
        <div className="container-fluid my-5">
            <img src={img} alt="error-pagenotfound" className="img-fluid w-100 h-100" />
            <Link to="/home">
                <button type="button" className="btn btn-dark rounded-pill mt-3 px-5 me-3">Go Back</button>
            </Link>
        </div>
    );
};

export default PageNotFound;