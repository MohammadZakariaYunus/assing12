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
    const url = `http://localhost:5000/booking/${id}`;

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
            <div class="card w-50 mx-auto max-w-md bg-base-100 shadow-xl mt-12">
                <div class="card-body">
                    <p className="text-success text-xl font-bold">Hello, {product.name}</p>
                    <h2 class="card-title">Please Pay for: {product.item}</h2>
                    <p>Your product quantity: <span className='text-orange-700'>{product.quantity}</span></p>
                    <p>Please pay: ${totalPrice}</p>
                </div>
            </div>
            <div class="card mx-auto my-8 flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;