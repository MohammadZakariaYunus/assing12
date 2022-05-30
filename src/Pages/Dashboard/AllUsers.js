import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader/Loader';
import UserRow from './UserRow';

const ManageAllOrders = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/booking')
        .then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-center text-3xl my-5'>All Users: {users.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;