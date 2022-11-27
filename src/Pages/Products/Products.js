import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Bookings/BookingModal/BookingModal';

import Product from './Product';

const Products = () => {
 const categoryProducts = useLoaderData();
    const [bookedProduct, setBookedProduct] = useState(null);

    return (
        <div className='w-9/12 mx-auto'>
            <h2>categroy : {categoryProducts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    categoryProducts.map(ctProduct => <Product
                         key={ctProduct._id}
                          ctProduct={ctProduct}
                          setBookedProduct={setBookedProduct}
                          ></Product>)
                }
            </div>
            {
                bookedProduct &&
                <BookingModal
                    bookedProduct={bookedProduct}
                    setBookedProduct={setBookedProduct}
                ></BookingModal>
            }
           
        </div>
    );
};

export default Products;