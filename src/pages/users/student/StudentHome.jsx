import React from 'react';
import { Helmet } from 'react-helmet-async';

const StudentHome = () => {
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || Stucent Home</title>
            </Helmet>
            <h1 className='text-2xl font-bold mb-3'>Student Home</h1>
            <p>Book class and Delete Classes</p>
        </div>
    );
};

export default StudentHome;