import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetails';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const { _id, item, price, company, quantity, img, description } = product;

    const handleBooking = event => {
        event.preventDefault();
        const booking = {
            productId: _id,
            email: user.email,
            name: user.displayName,
            item: item,
            price: price,
            company: company,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Booking Successful')
            });


    }




    // function ValidateQuantity() {
    //     var userQuantity = document.getElementById("quantityInput").value;
    //     var qError = document.getElementById("quantity-error");
    //     qError.innerHTML = "";
    //     var expr = quantity;
    //     if (userQuantity > expr) {
    //         qError.innerHTML = "You can not order over quantity";
    //     }
    //     if (userQuantity < expr) {
    //         qError.innerHTML = "You can not order under quantity";
    //     }
    // }

    return (
        <div>
            <h1 className='text-center text-3xl my-5'>Purchase</h1>

            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                <div class="card-body">
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={item} className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="price" disabled value={price || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="company" disabled value={company || ''} className="input input-bordered w-full max-w-xs" />

                        <input id='quantityInput' type="number" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />

                        <label class="label">
                            <span id='quantity-error' class="label-text-alt"></span>
                        </label>


                        <input type="text" name="address" placeholder='Address' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <textarea readOnly name="" id="" cols="30" rows="10"
                            value={description}></textarea>
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Purchase;