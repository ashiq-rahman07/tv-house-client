import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';




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
    // const { data: products, isLoading, refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch(`http://localhost:5000/products/user/${user?.email}`);
    //             const data = await res.json();
    //             console.log(products)
    //             return data;
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    // });
 
    return (
        <div>
            <p>My Product:{products.length} </p>
        </div>
    );
};

export default MyProduct;