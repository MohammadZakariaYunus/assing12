import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [product] = useProduct();
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((p, index) => <ProductRow
                                key={p._id}
                                index={index}
                                user={user}
                                p={p}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;