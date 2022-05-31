import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const OurProducts = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div>
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