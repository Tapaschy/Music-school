import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='container mx-auto'>
            <div className='text-center flex justify-center mt-14'>
                <img className='w-2/4' src="https://i.ibb.co/c2ZKdW2/404.png" alt="" />
            </div>

            <div className='text-center'>

                <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                    <span className='sr-only'>Error</span>
                    {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn'>
                    Back to <span className='text-primary'>home</span>
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;