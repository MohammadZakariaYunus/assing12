import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
const Review = ({ review }) => {
    const { comments, img, rating, name } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg font-bold'>{comments}</p>
                <p>
                    {rating} rating
                    <StarIcon className='text-yellow-300 w-7' />
                </p>
            </div>
        </div >

    );
};

export default Review;