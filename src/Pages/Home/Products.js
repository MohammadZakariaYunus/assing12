import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from './Product';

const Products = () => {
    const [products] = useProduct([]);

    return (
        <div className='p-12'>
            <h1 className='text-center'>Our Products</h1>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }

        </div >
    );
};

export default Products;