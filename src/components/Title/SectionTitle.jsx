import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='w-1/3 mx-auto my-8 text-center'>
            <p className='text-black text-4xl mb-2'>{heading}</p>
            <h3 className=' text-primary   py-3'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;