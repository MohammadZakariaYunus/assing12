import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-savannah-50768.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='mx-12' >
            <h1 className='text-center text-3xl my-5'>Customer Reviews</h1>
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