import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            img: '',
            comments: 'Best Quality',
            rating: 4

        },
        {
            _id: 2,
            img: '',
            comments: 'Very nice',
            rating: 4.5

        },
        {
            _id: 3,
            img: '',
            comments: 'Great...',
            rating: 5

        },
        {
            _id: 4,
            img: '',
            comments: 'That is awesome',
            rating: 4.7

        },
    ]
    return (
        <div className='mx-12' >
            <p>Customer Reviews</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div >
    );
};

export default Reviews;