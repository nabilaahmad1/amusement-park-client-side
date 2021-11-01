import React from 'react';
import './Footer.css';
import logo from '../../../Images/icon1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={logo} alt="website-logo" width="50" height="40" className="d-inline-block me-3" />
                        <span className="title lh-base fs-2">Happy Amusement Park</span>
                        <p className="text-light lh-base mt-3"> “Even though you’re growing up, you should never stop having fun.” – Nina Dobrev</p>
                        {/* social icons  */}
                        <div className="icon">
                            <a href="http://facebok.com" target="_blank" rel='noreferrer'><i className="fab fa-facebook-square fs-2 mx-3 title"></i></a>
                            <a href="http://twitter.com" target="_blank" rel='noreferrer'><i className="fab fa-twitter-square fs-2 mx-3 title"></i></a>
                            <a href="http://instagram.com" target="_blank" rel='noreferrer'><i className="fab fa-instagram-square fs-2 mx-3 title"></i></a>
                        </div>
                    </div>
                    {/* services list  */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <p className="title fs-3 lh-base text-start ms-5">Rides</p>
                        <ul className="text-light">
                            <Link className="text-light text-decoration-none" to="/rides"><li>Roller Coster</li></Link>
                            <Link className="text-light text-decoration-none" to="/rides"><li>Carousel</li></Link>
                            <Link className="text-light text-decoration-none" to="/rides"><li>Ferris Wheel</li></Link>
                            <Link className="text-light text-decoration-none" to="/rides"><li>Rotor</li></Link>
                            <Link className="text-light text-decoration-none" to="/rides"><li>Bumper Cars</li></Link>
                            <Link className="text-light text-decoration-none" to="/rides"><li>Log Rides</li></Link>
                        </ul>
                    </div>
                    {/* open time table  */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <p className="title fs-3 lh-base text-start ms-5">Opening Hours</p>
                        <table className="table text-light">
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>04:00pm - 8:00pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>11:00am - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>11:00am - 10:00pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;