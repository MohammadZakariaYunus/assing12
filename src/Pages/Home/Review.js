import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
const Review = ({ review }) => {
    const { comments, img, rating } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">User Name</h2>
                <p>{comments}</p>
            </div>
        </div>

    );
};

export default Review;