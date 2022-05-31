import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setProducts(data));
        }
    }, [user]);

    return (
        <div>
            <p className='text-center my-10 font-bold text-xl'>My Orders {products.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full table-normal">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Par/Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, index) => <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={p.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{p.item}</td>
                                <td>${p.price}</td>
                                <td>{p.quantity} pcs</td>
                                <td>${p.quantity * p.price}</td>
                                <td>
                                    {(p.price && !p.paid) && <Link to={`/dashboard/payment/${p._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(p.price && p.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{p.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;