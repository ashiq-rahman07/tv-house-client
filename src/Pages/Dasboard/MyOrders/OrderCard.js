import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
    const { product_img,resale_price,product_name } = order
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={product_img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {product_name}
                    <div className="badge badge-secondary p-5">Price: {resale_price}</div>
                </h2>
                
                <div className="card-actions justify-end">
                    <Link><button className='btn btn-primary'>Pay</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;