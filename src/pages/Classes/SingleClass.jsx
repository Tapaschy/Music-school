import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useRole from '../../hooks/useRole';
import { motion } from "framer-motion"

const SingleClass = ({ singleclass }) => {
    const { user } = useContext(AuthContext);
    const [role] = useRole();
    const userrole = role.role;

    const { classname, Instructorname, classurl, price, seats, _id } = singleclass;
    // console.log(singleclass);


    // const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = { classId: _id, classname, classurl, price, seats, email: user.email }
            fetch('https://assignment-12-server-olive.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        // refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added to the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire(
                            'Already Booked',
                        )
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to booked class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div>
            <div className="card w-96 bg-base-100  shadow-xl" style={{ backgroundColor: seats === 0 ? 'red' : 'bg-base-100' }}>
                <figure className="px-10 pt-10">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <img src={classurl} alt="Shoes" className="rounded-xl" />
                    </motion.div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classname}</h2>

                    <p>Instructor:{Instructorname}</p>
                    <div className='flex gap-2'>
                        <p>Price:${price}</p>
                        <p>seats:{seats}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart()} disabled={seats === 0 || userrole == "admin" || userrole == "instructor"} className="btn dark:bg-black btn-primary">{user ? <>Book Now</> : <>Please login</>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;