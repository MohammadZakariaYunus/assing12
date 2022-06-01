import React from 'react';
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
                <div class="rating">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-4.5" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p>
                    {rating} star rating
                </p>
            </div>
        </div >

    );
};

export default Review;