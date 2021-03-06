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
            quantity: event.target.quantity.value,
            minQuantity: event.target.minQuantity.value,
            description: event.target.description.value,
            img: event.target.url.value,
        }

        fetch('https://pacific-savannah-50768.herokuapp.com/products', {
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
            <h1 className="text-center text-3xl my-5">Add A Product</h1>
            <form onSubmit={handleProductAdd} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="item" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="price" placeholder="Product Price" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="url" placeholder="Product Image URL" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="minQuantity" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered w-full max-w-xs h-28" name="description" placeholder='Product Description' id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default AddProduct;