import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetails';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const { _id, item, price, company, quantity, img, description } = product;
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        const booking = {
            productId: _id,
            email: user.email,
            name: user.displayName,
            item: item,
            img: img,
            price: price,
            company: company,
            quantity: data.uQuantity,
            phone: data.phone,
            address: data.address
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Booking Successful')
            });
    };

    return (
        <div>
            <h1 className='text-center text-3xl my-5'>Purchase</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={img} alt="" /></figure>
                    <div className="card-body">
                        <h1 className='text-3xl font-bold'>Product: {item}</h1>
                        <h1 className='text-xl font-bold'>Price: {price}</h1>
                        <h1 className='text-xl font-bold'>Company: {company}</h1>
                        <h1 className='text-xl font-bold'>Available Quantity: {quantity}</h1>
                        <h1 className='text-xl '>Minimum Order Quantity: 2 pce</h1>
                        <p className='text-xl'>{description}</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <h1 className='text-center text-3xl my-5 '>Book Now</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Quantity"
                                className="input input-bordered w-full max-w-xs"
                                defaultValue="2"
                                {...register("uQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum is Required'
                                    },
                                    min: {
                                        value: 2,
                                        message: 'Must be 2 Pcs or longer'
                                    },
                                    max: {
                                        value: 500,
                                        message: 'You can not order more then available quantity.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.uQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.uQuantity.message}</span>}
                                {errors.uQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.uQuantity.message}</span>}
                                {errors.uQuantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.uQuantity.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Phone"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>

                            <input className='btn w-full max-w-xs bg-primary text-white' type="submit" value="Book Now" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;