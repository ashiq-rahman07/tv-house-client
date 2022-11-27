import React from 'react';

const ProductCard = ({ product }) => {

    const { _id, product_name, email, resale_price, category_name, years_use, condition_type, product_img, description,
        mobile } = product;

    return (
        <div className="card w-4/5 bg-gray-200 shadow-xl">
            <figure><img src={product_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {product_name}
                    <div className="badge badge-secondary">{condition_type}</div>
                </h2>
                <p>{description}</p>
                <p>Price: {resale_price}</p>
                <p>{years_use} years of use</p>
                <p className='badge badge-outline'>Mobaile No: {mobile}</p>
                <div className="card-actions justify-end">
                    <div className=" btn btn-outline">Delete Product</div>
                    <div className=" btn btn-outline">Available</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;