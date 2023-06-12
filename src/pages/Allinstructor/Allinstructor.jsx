import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import useFilterclass from '../../hooks/useFilterclass';
import SingleInstructor from './SingleInstructor';
import useFilterInstructor from '../../hooks/useFilterInstructor';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Allinstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const instructors = users.filter(users => users.role === 'instructor');


    return (
        <div className='mt-20 container mx-auto'>
            <Helmet>
                <title>MUSIC FAIRY || Instructor</title>
            </Helmet>
            <SectionTitle subHeading="" heading="All Instructors" ></SectionTitle>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-5'>

                {instructors.map(instructor =>
                    <SingleInstructor key={instructor.name}
                        instructor={instructor}
                    ></SingleInstructor>)}
            </div>
        </div>
    );
};

export default Allinstructor;