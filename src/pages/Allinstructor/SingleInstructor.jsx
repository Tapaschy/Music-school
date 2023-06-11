import React from 'react';
import { Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion"

const SingleInstructor = ({ instructor }) => {
    const { email, name, photoURL, role } = instructor;
    console.log(instructor);
    return (
        <div>

            <motion.div animate={{ rotate: [0, 200, 200, 0] }}
                transition={{ duration: 5 }} className="card  bg-base-100 shadow-xl border border-primary">
                <figure className="px-10 pt-10">
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.1 },
                    }}>
                        <img src={photoURL} alt="image" className="rounded-full h-36 w-36" />
                    </motion.div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div>
                        <h1>Role: {role}</h1>
                        {/* <h3 className='font-semibold'>All Classes Name</h3> */}
                        {/* <p>{classNames.join(', ')}</p> */}
                    </div>
                </div>

            </motion.div>

        </div>
    );
};

export default SingleInstructor;