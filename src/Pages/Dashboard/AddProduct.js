import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleProductAdd = event => {
        event.preventDefault();
        const add = {
            email: user.email,
            name: user.displayName,
            item: event.target.item.value,
            price: event.target.price.value,
            company: event.target.company.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            url: event.target.url.value,
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Product Added Successful')
            });


    }
    return (
        <div>
            <h1 className="text-center text-3xl">Add A Product</h1>
            <form onSubmit={handleProductAdd} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="item" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="price" placeholder="Product Price" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="company" placeholder="Product Company" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="url" placeholder="Product Image URL" className="input input-bordered w-full max-w-xs" />
                <input id='quantityInput' type="number" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                <textarea name="description" placeholder='Product Description' id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default AddProduct;