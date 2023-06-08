import React from 'react';

const SingleClass = ({singleclass}) => {
    const role=false;
    const {classname,Instructorname,classurl,price,seats}=singleclass;
    console.log(singleclass);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl" style={{ backgroundColor: seats === 0 ? 'red' : 'transparent' }}>
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
                        <button disabled={seats === 0 || role} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;