import React from 'react';
import { Link } from 'react-router-dom';
import sideimg from '../../Gallery/img.jpg'
import './About.css'

const About = () => {
    return (
        <div className="container mt-5 py-5">
            <div className="row background1">
                <div className="col-lg-6 col-12">
                    <img src={sideimg} alt="" className="img-fluid w-100 h-100" />
                </div>
                {/* about us section  */}
                <div className="col-12 col-lg-6 my-auto py-5">
                    <h1 className="title lh-base fw-bolder">About Us</h1>
                    <p className="text-light lh-sm mt-3">Happy amusement park has become a favourite destination for group outings, picnics, company or family day out. Attractive packages [including food, gifts, shows and travel to and from the park] are available. Facilities for arranging conference, annual general meeting or any corporate event, birthday, wedding or any family party, photo session or video shooting are also available here. Prince Ashu, Princess Lia and their animal friends Zuzu, Bobo, Zipper and Bangasaur are always at the park welcoming everyone with a smile. Oh and they have many games for you.</p>
                    <Link to="/gallery">
                        <button type="button" className="btn btn-light rounded-pill mt-3 px-5 me-3">View Gallery</button>
                    </Link>
                    <Link to="/contact">
                        <button type="button" className="btn btn-light rounded-pill mt-3 px-5 me-3">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;