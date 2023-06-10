import React from 'react';
import useFilterclass from './useFilterclass';

const useFilterInstructor = () => {


    const [approvedclasses] = useFilterclass();

        const uniqueInstructors = Array.from(new Set(approvedclasses.map(item => item.Instructorname)));
        const instructorsWithClasses = uniqueInstructors.map(instructor => {
            const filteredData = approvedclasses.filter(item => item.Instructorname === instructor);
            const totalClasses = filteredData.length;
            const email = filteredData[0].email;
            const photoUrl = filteredData[0].photoUrl;
            const classNames = filteredData.map(item => item.classname);

            return { name: instructor, totalClasses, email, photoUrl, classNames };
        });

        return [instructorsWithClasses];

};

export default useFilterInstructor;