import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
    const{user,loading}=useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: enrolled = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`)
            return res.data;
        },
    })
    console.log(enrolled);
    return (
        <div className='w-full'>
        <h1 className='text-center font-bold text-2xl'>Total Enrolled Class:{enrolled.length}</h1>
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
                        <th>Payment ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {enrolled.map((enroll, index) => <tr key={enroll._id}>
                        <th>{index + 1}
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={enroll?.classurl} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{enroll?.classname}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {enroll?.email}
                        </td>
                        <td>{enroll?.price}</td>
                        <th>
                        {enroll?.transactionId}
                        </th>
                    </tr>)}

                </tbody>


            </table>
        </div>
    </div>
    );
};

export default EnrolledClasses;