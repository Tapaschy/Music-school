import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/Title/SectionTitle';
import useFilterclass from '../../hooks/useFilterclass';
import SingleInstructor from './SingleInstructor';

const Allinstructor = () => {
    const [approvedclasses]=useFilterclass();
    // const [instructors, setInstructors] = useState([]);

    const getInstructorClasses = () => {
        const uniqueInstructors = Array.from(new Set(approvedclasses.map(item => item.Instructorname)));
        const instructorsWithClasses = uniqueInstructors.map(instructor => {
          const filteredData = approvedclasses.filter(item => item.Instructorname === instructor);
          const totalClasses = filteredData.length;
          const email = filteredData[0].email;
          const photoUrl = filteredData[0].photoUrl;
          const classNames = filteredData.map(item => item.classname);
    
          return { name: instructor, totalClasses, email, photoUrl,classNames };
        });
    
        return instructorsWithClasses;
      };
    
      const instructors = getInstructorClasses();
      console.log(instructors);
      

    return (
        <div className='mt-20 container mx-auto'>
            <SectionTitle subHeading="" heading="All Instructors" ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
             
             {instructors.map(instructor=>
             <SingleInstructor key={instructor.name}
             instructor={instructor}
             ></SingleInstructor>)}
             </div>
        </div>
    );
};

export default Allinstructor;