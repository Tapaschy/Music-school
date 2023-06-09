import React from 'react';
import { Link } from 'react-router-dom';

const Tablerow = ({singlecls,index}) => {
    return (
        <>

            <tr>
                <th>{index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={singlecls.classurl} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{singlecls.classname}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {singlecls.price}
                </td>
                <td>{singlecls.seats}</td>
                <td>{singlecls.status}</td>
                <td>enrolled</td>
                <td>{singlecls.feedback}</td>
                <th>
                    <Link to={`/dashboard/updateclass/${singlecls._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                </th>
            </tr>
        </>
    );
};

export default Tablerow;