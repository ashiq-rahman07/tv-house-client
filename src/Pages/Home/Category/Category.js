import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, product_img, category_id , category_name } = category;

 
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to={`/products/${category_name}`}><button className="btn btn-primary">Buy Now</button></Link>   
                </div>
            </div>
        </div>
    );
};

export default Category;