import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import SingleClass from './SingleClass';
import useFilterclass from '../../hooks/useFilterclass';

const AllClasses = () => {
    const [classes]=useFilterclass();
    const approvedclasses = classes.filter(classes => classes.status === 'approve').sort((a, b) => b.enrolled - a.enrolled);

    return (
        <div className='mt-20 container mx-auto'>
            <SectionTitle subHeading="" heading="All classes" ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                {approvedclasses.map((singleclass) => 
                <SingleClass key={singleclass._id}
                singleclass={singleclass}
                ></SingleClass>
                )}

            </div>
        </div>
    );
};

export default AllClasses;