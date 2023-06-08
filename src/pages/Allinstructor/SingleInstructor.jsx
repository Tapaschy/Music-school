import React from 'react';

const SingleInstructor = ({instructor}) => {
    const{classNames,email,name,photoUrl,totalClasses}=instructor;
    console.log(instructor);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border border-primary">
                <figure className="px-10 pt-10">
                    <img src={photoUrl} alt="Shoes" className="rounded-full h-36 w-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div>
                    <h1>Total classes: {totalClasses}</h1>
                    <h3 className='font-semibold'>All Classes Name</h3>
                    <p>{classNames.join(', ')}</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default SingleInstructor;