import React from 'react';

const Product = ({ ctProduct, setBookedProduct }) => {
    const { category_name, product_name, product_img, location, resale_price, orginal_price, years_use, seller_name, category_id ,_id} = ctProduct
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={product_img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <label
                   
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setBookedProduct(ctProduct)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Product;