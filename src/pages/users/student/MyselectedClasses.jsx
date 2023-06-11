import React, { useState } from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_Pay_Upload_token);

const MyselectedClasses = () => {
    const [carts, refetch] = useCart();
    const[price,setPrice]=useState('');
    const[id,setId]=useState('');
    console.log(price);
    const handleprice=(price,id)=>{
        setPrice(price);
        setId(id);
    };

    const handleDelete = cart => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${cart._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };
    return (
        <div className='w-full'>
            <h1 className='text-center font-bold text-2xl'>Total Booked Class:{carts.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {carts.map((cart, index) => <tr key={cart._id}>
                            <th>{index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart?.classurl} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cart?.classname}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {cart?.email}
                            </td>
                            <td>{cart?.price}</td>
                            <td>{cart?.seats}</td>
                            <th>
                                <button onClick={() => handleDelete(cart)} className="btn btn-ghost btn-xs" >Delete</button>
                                {/* <Link to="/dashboard/payment"><button className="btn btn-ghost btn-xs" >Pay</button></Link> */}

                                <label onClick={()=>handleprice(cart.price,cart._id)} htmlFor={cart._id} className="btn btn-ghost btn-xs">Pay</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id={cart._id} className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Pay now</h3>
                                        <div>

                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm price={price} id={id} />
                                            </Elements>
                                        </div>
                                        <div className="modal-action">
                                            <label htmlFor={cart._id} className="btn">Close!</label>
                                        </div>
                                    </div>
                                </div>




                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyselectedClasses;