import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SingleClass = ({singleclass}) => {
    const{user}=useContext(AuthContext);
    const role=false;
    const {classname,Instructorname,classurl,price,seats}=singleclass;
    console.log(singleclass);
    return (
        <div>
            <div className="card w-96 bg-base-100  shadow-xl" style={{ backgroundColor: seats === 0 ? 'red' : 'bg-base-100' }}>
                <figure className="px-10 pt-10">
                    <img src={classurl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classname}</h2>
                    
                    <p>Instructor:{Instructorname}</p>
                    <div className='flex gap-2'>
                    <p>Price:${price}</p>
                    <p>seats:{seats}</p>
                    </div>
                    <div className="card-actions">
                        <button disabled={seats === 0 || role} className="btn dark:bg-black btn-primary">{user?<>Buy Now</>:<>Please login</>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;