import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            name: user.displayName,
            img: user.photoURL,
            comments: event.target.review.value,
            rating: event.target.rating.value,
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Review Added Successful')
            });
    }
    return (
        <div>
            <h1 className='text-center text-3xl'>Please Give Your Review</h1>
            <form onSubmit={handleAddReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <textarea class="textarea textarea-bordered" name='review' placeholder="Your review"></textarea>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Give your rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating" minLength={0} maxLength={5} class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;