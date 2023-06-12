import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import useFilterclass from '../../hooks/useFilterclass';
import SingleClass from '../Classes/SingleClass';

const ClassesSection = () => {
    const [classes]=useFilterclass();
    // const approvedclasses = classes.filter(classes => classes.status === 'approve').sort((a, b) => b.price - a.price);
    const approvedclasses = classes.filter(classes => classes.status === 'approve').sort((a, b) => b.enrolled - a.enrolled);
    const topsixclass = approvedclasses.slice(0, 6);
    return (
        <div className='container mx-auto'>
            <SectionTitle subHeading="for" heading="Popular classes" ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                {topsixclass.map((singleclass) => 
                <SingleClass key={singleclass._id}
                singleclass={singleclass}
                ></SingleClass>
                )}

            </div>
        </div>
    );
};

export default ClassesSection;