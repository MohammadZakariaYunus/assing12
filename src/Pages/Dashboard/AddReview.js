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

        fetch('https://pacific-savannah-50768.herokuapp.com/review', {
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
            <h2 className="text-center text-3xl my-10">Please Give Your Review</h2>
            <div className="card w-96 border-2 border-indigo-200 bg-base-100 shadow-xl mx-auto">
                <form onSubmit={handleAddReview} className='grid grid-cols-1 gap-3 justify-items-center'>

                    <div className="card-body">
                        <label className="label ">
                            <span className="label-text">Your review</span>
                        </label>

                        <textarea className="textarea textarea-bordered w-96 h-48 max-w-xs" name='review' placeholder="..."></textarea>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give your rating</span>
                            </label>
                            <input type="number" name='rating' placeholder="Rating" min={1} max={5} className="input input-bordered w-full max-w-xs" />

                            <div className="card-actions justify-end">
                                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </div >
    );
};

export default AddReview;