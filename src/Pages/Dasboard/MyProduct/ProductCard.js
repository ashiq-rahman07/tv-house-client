import React from 'react';

const ProductCard = ({ product }) => {

    const { _id, product_name, email, resale_price, category_name, years_use, condition_type, product_img, description,
        mobile } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;