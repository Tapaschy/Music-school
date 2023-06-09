import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import SingleClass from './SingleClass';
import useFilterclass from '../../hooks/useFilterclass';

const AllClasses = () => {
    const [classes]=useFilterclass();
    const approvedclasses = classes.filter(classes => classes.status === 'approve').sort((a, b) => b.price - a.price)

    // const { data, refetch } = useQuery(['classes'], fetchUsers);

    // async function fetchUsers() {
    //     const response = await fetch('http://localhost:5000/classes');
    //     const result = await response.json();
    //     //   console.log(result);

    //     // Filter the 'approved' documents
    //     const approvedclasses = result.filter(classes => classes.status === 'pending').sort((a, b) => b.seats - a.seats);
    //       console.log(approvedclasses);
    //     return approvedclasses;
    // }
    // const topsixclass = approvedclasses.slice(0, 6);
    // console.log(data);
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