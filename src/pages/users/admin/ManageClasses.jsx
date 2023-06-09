import React from 'react';
import useFilterclass from '../../../hooks/useFilterclass';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const[classes,refetch]=useFilterclass();
    console.log(classes);

    const handleclassStatus = (singleclass,status) =>{
        const body = {
            status: status
          };
          console.log(body);
        fetch(`http://localhost:5000/classes/status/${singleclass._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class is ${status} Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
                  
            }
        })
    }
    return (
        <div className='w-full'>
            <h1>Total Classes:{classes.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Class name Name</th>
                            <th>Instructor email</th>
                            <th>Instructor name</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {classes.map((singleclass, index) => <tr key={singleclass._id}>
                            {console.log(singleclass)}
                            <th>{index+1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleclass.classurl} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{singleclass?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {singleclass?.email}
                            </td>
                            <td>
                                {singleclass?.Instructorname}
                            </td>
                            <td>
                                {singleclass?.seats}
                            </td>
                            <td>
                                {singleclass?.price}
                            </td>
                            <td>{singleclass?.status}</td>
                            <th>
                                <button disabled={singleclass.status === 'approve' } className="btn btn-ghost btn-xs" onClick={()=>handleclassStatus(singleclass,"approve")}>Approve</button>
                                <button disabled={singleclass.status === 'deny' }  className="btn btn-ghost btn-xs" onClick={()=>handleclassStatus(singleclass,"deny")}>Deny </button>
                                <button className="btn btn-ghost btn-xs">send feedback</button>
                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;