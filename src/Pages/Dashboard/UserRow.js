import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, displayName, role } = user;
    const makeAdmin = () => {
        fetch(`https://pacific-savannah-50768.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    const deleteUser = (email) => {
        fetch(`https://pacific-savannah-50768.herokuapp.com/users/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success(`User Remove.`);
                }
            })
    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-info">Make Admin</button>}
            </td>
            <td><button className="btn btn-xs btn-error" onClick={() => deleteUser(email)} >Remove User</button></td>
        </tr>
    );
};

export default UserRow;