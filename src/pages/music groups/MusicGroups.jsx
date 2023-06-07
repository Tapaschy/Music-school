import React from 'react';
import SectionTitle from '../../components/Title/SectionTitle';

const MusicGroups = () => {
    return (
        <div className='container mx-auto'>
            <SectionTitle heading={'Music Group'} subHeading={"for"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className="card  bg-base-100 shadow-xl border border-primary">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/5Y2Py5M/services-3.jpg" alt="Shoes" className="rounded-full h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Kids</h2>
                        <p>Our school is a solution for families who would like to expose their children to the world of music.</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl border border-primary">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/G21G97r/services-2.jpg" alt="Shoes" className="rounded-full h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teens</h2>
                        <p>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border border-primary">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/LhM6bpd/services-1.jpg" alt="Shoes" className="rounded-full h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Adults</h2>
                        <p>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl border border-primary">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/7zY5Gwd/close-up-man-playing-acoustic-guitar-dark-with-stage-lighting-169016-14178.jpg" alt="Shoes" className="rounded-full h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Private lessons</h2>
                        <p>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicGroups;