import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [show, setShow] = useState(false);
    const handleTogglePassword = () => {
        setShow(!show);
    };
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || LOGIN</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/4">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center text-primary">Login now!</h1>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} placeholder="password" name='password' className="input input-bordered" />
                                    <FaEye onClick={handleTogglePassword} className='absolute top-12 right-1 z-10'></FaEye>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className='btn btn-primary' />
                                </div>

                                <button className='btn btn-primary w-full mt-1 mb-1'><FaGoogle></FaGoogle></button>
                                <Link to={"/signup"}><p>No account ? please signup</p></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;