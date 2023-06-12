import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserSecret } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleMakeAdmin = (user, role) => {
        const body = {
            role: role
        };
        console.log(body);
        fetch(`https://assignment-12-server-olive.vercel.app/users/role/${user._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an ${role} Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>MUSIC FAIRY || Manage User</title>
            </Helmet>
            <h1 className='text-center font-bold text-2xl'>Total user:{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user?.email}
                            </td>
                            <td>{user?.role !== 'admin' ? <>{user?.role}</> : <><button className='btn btn-primary'><FaUserSecret></FaUserSecret></button></>}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleMakeAdmin(user, "admin")}>Make Admin</button>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleMakeAdmin(user, "instructor")}>Make Instructor</button>
                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUser;