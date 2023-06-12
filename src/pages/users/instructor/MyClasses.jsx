import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Tablerow from './Tablerow';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: myclasses = [], refetch, isLoading } = useQuery(['myclasses'], async () => {
        const res = await fetch(`https://assignment-12-server-olive.vercel.app/classes/${user.email}`)
        return res.json();
    })
    // console.log(myclasses);

    return (
        <div className='w-full'>
            <Helmet>
                <title>MUSIC FAIRY || My class</title>
            </Helmet>
            <h1 className='font-bold text-2xl text-center'>Total Classes:{myclasses.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Status</th>
                            <th>Enroled</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myclasses.map((singlecls, index) => <Tablerow key={singlecls._id}
                            singlecls={singlecls}
                            index={index}
                        ></Tablerow>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;