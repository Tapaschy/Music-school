import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const Signup = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,'Password must a character,1 number,1 special character'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        photo:Yup.string().required(' photo is required'),
        name:Yup.string().required(' name is required'),
        email:Yup.string().required(' email is required'),
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
    const password = useRef({});
    password.current = watch("password");
    const onSubmit = data => console.log(data);
    const [show, setShow] = useState(false);
    const handleTogglePassword = () => {
        setShow(!show);
    };
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || SIGN UP</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-3/4">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center text-primary">Register now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name"  {...register("name")} name='name' className="input input-bordered" required />
                                    {errors.name && <p>{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email"  {...register("email")} name='email' className="input input-bordered" required />
                                    {errors.email && <p>{errors.email.message}</p>}
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="photo" {...register("photo")} name='photo' className="input input-bordered" />
                                    {errors.photo && <p>{errors.photo.message}</p>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"}  {...register('password')} placeholder="password" name='password' className="input input-bordered" required />
                                    <FaEye onClick={handleTogglePassword} className='absolute top-12 right-1 z-10'></FaEye>
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>

                                    <input type={show ? "text" : "password"}  {...register('confirmPassword')}
                                        placeholder="Confirm password" name='confirmPassword' className="input input-bordered" required />
                                    <FaEye onClick={handleTogglePassword} className='absolute top-12 right-1 z-10'></FaEye>
                                    {errors.confirmPassword && <span>Password not match</span>}
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className='btn btn-primary' />
                                </div>
                                <Link to={"/login"}><p>Have acount Please login.</p></Link>
                            </form>
                        </div>
                        <div>
                            {/* <h1 className='text-center text-red-700'>{error}</h1> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;