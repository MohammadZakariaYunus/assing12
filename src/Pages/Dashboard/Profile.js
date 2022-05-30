import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Profile = () => {
    const [user] = useAuthState(auth);
    const handleProfile = event => {
        event.preventDefault();

        const profile = {
            email: user.email,
            name: event.target.name.value,
            age: event.target.age.value,
            occupation: event.target.occupation.value,
            education: event.target.education.value,
            phone: event.target.phone.value,
            description: event.target.description.value,
        }

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Profile Added Successful')
            });


    }
    return (
        <div>
            <h1 className='text-center text-3xl'>My Profile</h1>

            <form onSubmit={handleProfile} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="age" placeholder="Your Age" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="occupation" placeholder="Occupation" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered h-18" name="description" placeholder='About You' id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>


        </div>
    );
};

export default Profile;