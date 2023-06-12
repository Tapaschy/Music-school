import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import useFilterInstructor from '../../hooks/useFilterInstructor';
import SingleInstructor from '../Allinstructor/SingleInstructor';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorSection = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const instructors = users.filter(users => users.role === 'instructor');
    const instructorf = instructors.slice(0, 6);

    return (
        <div className='mt-20 container mx-auto'>
            <SectionTitle subHeading="" heading="Top Instructors" ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                {instructorf.map(instructor =>
                    <SingleInstructor key={instructor.name}
                        instructor={instructor}
                    ></SingleInstructor>)}
            </div>
        </div>
    );
};

export default InstructorSection;