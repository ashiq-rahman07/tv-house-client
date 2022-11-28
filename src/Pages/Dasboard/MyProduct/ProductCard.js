import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { _id, product_name, email, resale_price, category_name, years_use, condition_type, product_img, description,
        mobile } = product;

    const handleAdvertise = () => {
        const productInfo = {
            product_name,
            resale_price,
            category_name,
            years_use,
            condition_type,
            product_img,
            description
        }
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');

            })

    }
 

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
                <div  className=" btn btn-outline">Available</div>
            </div>
        </div>
    </div>
);
};

export default ProductCard;