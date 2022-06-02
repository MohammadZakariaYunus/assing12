import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, item, price, company, quantity, img, description } = product;
    const navigate = useNavigate();


    const navigateToProductDetail = id => {
        navigate(`/purchase/${id}`);

    }

    return (
        <div>
            <div className="card m-4 h-65 lg:card-side overflow-hidden bg-base-100 shadow-xl">
                <figure className="px-10 p-3">
                    <img src={img} alt="" className="rounded-md " />
                </figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-bold">{item}</h2>
                    <h3 className='text-lg font-bold'>Price: {price}</h3>
                    <h3 className='text-lg font-bold'>Company: {company}</h3>
                    <h3 className='text-lg font-bold'>Quantity: {quantity}</h3>
                    <h3 className='text-lg font-bold'>Description: {description}</h3>
                    <button onClick={() => navigateToProductDetail(_id)} className='badge badge-outline badge-lg'>Show Product Details...</button>
                </div>
            </div>
        </div>
    );
};

export default Product;