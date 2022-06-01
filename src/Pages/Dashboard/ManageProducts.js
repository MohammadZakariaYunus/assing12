import React from 'react';
import useProduct from '../../hooks/useProduct';

const ManageProducts = () => {
    const [product, setProduct] = useProduct();


    const handleDeleteId = id => {
        const proceed = window.confirm('Are You Sure Delete Item?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = product.filter(item => item._id !== id);
                    setProduct(remaining);
                })
        }
    }

    return (
        <div>
            <p className='text-center my-5 font-bold text-xl'>All Product {product.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full table-normal">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product</th>
                            <th>Par/Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((p, index) => <tr
                                key={p._id}
                            >
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-24 rounded">
                                        <img src={p.img} />
                                    </div>
                                </div></td>
                                <td>{p.item}</td>
                                <td>${p.price}</td>
                                <td>{p.quantity} pcs</td>
                                <td>${p.quantity * p.price}</td>
                                <td><button onClick={() => handleDeleteId(p._id)} className='btn btn-xs btn-error'>Remove
                                </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;