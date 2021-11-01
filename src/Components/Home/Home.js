import React from 'react';
import { useHistory } from 'react-router';
import About from '../About/About';
import Review from '../Review/Review';
import Ride from '../Ride/Ride';
import Gallery from '../Gallery/Gallery';
import './Home.css';

const Home = () => {

    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }

    return (
        <div className="container-fluid">
            <div className="row pic">
                {/* top banner intro text  */}
                <div className="col-12 text-center py-5">
                    <h1 className="title lh-base fw-bolder mt-5">Have Fun and Enjoy Your Life</h1>
                    <p className="text-light lh-sm mt-3">The life you have left is a gift. Cherish it. Enjoy it now, to the fullest. Do what matters, now.</p>
                    <button onClick={handleClick} type="button" className="btn btn-light rounded-pill mt-3 px-5 me-3">Learn More</button>
                </div>
            </div>
            <About></About>
            <Ride></Ride>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;