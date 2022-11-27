import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from './ProductCard';




const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const {data:products = [],isLoading} = useQuery({
        queryKey: ['products'],
        queryFn:()=> fetch(`http://localhost:5000/products/user/${user?.email}`)
        .then(res=> res.json())
    })
if(isLoading){
    return <Loading></Loading>
}else{
    console.log(products)
}
    
 
    return (
        <div>
            <p>My Product:{products.length} </p>
            <div className='grid lg:grid-cols-2 gap-4 '>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
           
        </div>
    );
};

export default MyProduct;