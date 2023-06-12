import React from 'react';
import SectionTitle from '../../../components/Title/SectionTitle';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || Admin Home</title>
            </Helmet>
            <h1 className='text-2xl font-bold mb-3'>Instrctor Home</h1>
            <p>Manage User and Manage Classes</p>
        </div>
    );
};

export default AdminHome;