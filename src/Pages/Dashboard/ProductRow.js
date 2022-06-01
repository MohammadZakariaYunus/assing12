import React from 'react';

const ProductRow = ({ user, index, p }) => {
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{p.item}</td>
                <td>{p.quantity}</td>
                <td><button className="btn btn-xs">Remove</button></td>
            </tr>
        </div>
    );
};

export default ProductRow;