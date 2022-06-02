import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://pacific-savannah-50768.herokuapp.com/booking`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <p className='text-center my-10 font-bold text-xl'>All Orders {products.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full table-normal">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Product</th>
                            <th>Par/Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, index) => <tr
                                key={p._id}
                                user={user}
                                p={p}
                            >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                                <td>{p.item}</td>
                                <td>${p.price}</td>
                                <td>{p.quantity} pcs</td>
                                <td>${p.quantity * p.price}</td>
                                <td> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;