import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                setIsLoading(true);
                setUser(result.user)
                history.push(url)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);;
            });
    }

    return (
        <div className="container-fluid my-5 py-5" id="login">
            {/* heading  */}
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder">Login</h1>
            </div>
            {/* login button */}
            <div>
                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-dark rounded-pill mt-3 px-5 me-3">Sign in with <i className="fab fa-google text-white fs-6"></i></button>
            </div>
        </div>
    );
};

export default Login;