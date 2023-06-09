import React from 'react';
import useCart from '../../../hooks/useCart';

const MyselectedClasses = () => {
    const[carts]=useCart();
    console.log(carts);
    return (
        <div>
            This is selected classes
        </div>
    );
};

export default MyselectedClasses;