import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Tablerow from './Tablerow';

const MyClasses = () => {
    const{user}=useContext(AuthContext);
    const { data: myclasses = [], refetch,isLoading } = useQuery(['myclasses'], async () => {
        const res = await fetch(`http://localhost:5000/classes/${user.email}`)
        return res.json();
    })
    // console.log(myclasses);

    return (
        <div className='w-full'>
            <h1>Total Classes:{myclasses.length}</h1>
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
                        {myclasses.map((singlecls, index) =><Tablerow key={singlecls._id}
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