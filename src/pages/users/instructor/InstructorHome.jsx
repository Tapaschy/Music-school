import React from 'react';
import { Helmet } from 'react-helmet-async';

const InstructorHome = () => {
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || Instructor Home</title>
            </Helmet>
            <h1 className='text-2xl font-bold mb-3'>Instrctor Home</h1>
            <p>Add class and Update Classes</p>
        </div>
    );
};

export default InstructorHome;