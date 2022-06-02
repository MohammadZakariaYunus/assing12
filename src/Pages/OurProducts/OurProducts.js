import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const OurProducts = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://pacific-savannah-50768.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-5'>Our Products</h1>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default OurProducts;