import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ProfileInfo = (profile) => {
    const [user] = useAuthState(auth);
    const { email,
        name,
        age,
        occupation,
        education,
        phone,
        description } = profile;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={user.photoURL} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='text-center text-lg'>{email}</h4>
                    <h4 className='text-center text-lg'>{age}</h4>
                    <h4 className='text-center text-lg'>{occupation}</h4>
                    <h4 className='text-center text-lg'>{education}</h4>
                    <h4 className='text-center text-lg'>{phone}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;