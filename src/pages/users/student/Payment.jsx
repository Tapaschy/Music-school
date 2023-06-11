import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Pay_Upload_token);

const Payment = () => {
    return (
        <div className='w-3/4 text-center'>
            <h1>Please pay For you Class</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;