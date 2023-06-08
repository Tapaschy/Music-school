import React, { useContext, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { saveUser } from '../../assets/api/auth';


const Signup = () => {
    const {
        loading,
        setLoading,
        signInWithGoogle,
        createUser,
        updateUserProfile,
      } = useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

      const [show, setShow] = useState(false);
      const handleTogglePassword = () => {
          setShow(!show);
      };

    // for password validation
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,'Password must a character,1 number,1 special character'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        photo:Yup.mixed().required('File is required'),
        name:Yup.string().required(' name is required'),
        email:Yup.string().required(' email is required'),
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    // const password = useRef({});
    // password.current = watch("password");
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.photo[0])

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
          .then(imageData => {
            const imageUrl = imageData.data.display_url;
            console.log(imageData);
    
            createUser(data.email, data.password)
              .then(result => {
                updateUserProfile(data.name, imageUrl)
                  .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      saveUser(result.user);
                    navigate(from, { replace: true });
                  })
                  .catch(err => {
                    setLoading(false)
                    console.log(err.message)
                    // toast.error(err.message)
                  })
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
                // toast.error(err.message)
              })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            // toast.error(err.message)
          })
    
    
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            console.log(result.user)
            // save user to db
            saveUser(result.user)
            navigate(from, { replace: true })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            // toast.error(err.message)
          })
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
                                    <input type="file" placeholder="photo" {...register("photo")} name='photo' className="file-input file-input-bordered w-full " />
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
                                <button onClick={handleGoogleSignIn} className='btn btn-primary w-full mt-1 mb-1'><FaGoogle></FaGoogle></button>
                                <Link to={"/login"}><p>Have acount Please login.</p></Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;