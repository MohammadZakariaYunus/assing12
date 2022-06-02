import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L56G6B7F6GUjvscQy2vxv46HY0e6MpNlmlXTsea4V5MJmrhiiFGNEvCC1Dfy6Yx0X0NCdjtOze7gVFqAQiUyVqV00u6V5YMQk');

const Payment = () => {
    const { id } = useParams();
    const url = `https://pacific-savannah-50768.herokuapp.com/booking/${id}`;

    const { data: product, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>
    }
    const totalPrice = (product.quantity * product.price)

    return (
        <div>
            <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl mt-12">
                <div className="card-body">
                    <p className="text-blue-500 text-2xl font-bold">Hello..</p>
                    <p className="text-blue-500 text-xl font-bold">{product.name}</p>
                    <h2 className="card-title">You are Booked:<span className='text-green-500'>{product.item}</span></h2>
                    <h2 className="text-xl">Please Pay for: <span className='text-green-500'>{product.item}</span></h2>
                    <p>Your product quantity: <span className='text-orange-700'>{product.quantity} </span>pcs.</p>
                    <p>Please pay: <span className='text-teal-500'>${totalPrice}.</span></p>
                </div>
            </div>
            <div className="card mx-auto my-8 flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;