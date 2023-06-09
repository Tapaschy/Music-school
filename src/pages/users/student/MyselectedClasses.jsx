import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const MyselectedClasses = () => {
    const[carts,refetch]=useCart();
    console.log(carts);

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
            <h1 className='text-center font-bold text-2xl'>Total user:{carts.length}</h1>
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
                            <th>{index+1}
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
                                <button onClick={()=>handleDelete(cart)} className="btn btn-ghost btn-xs" >Delete</button>
                                <button className="btn btn-ghost btn-xs" >Pay</button>
                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyselectedClasses;