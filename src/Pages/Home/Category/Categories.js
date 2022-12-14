import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories,setCategories] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCategories(data);
        })
    },[])
    return (
        <div className=''>
            <h2 className='text-lg text-center font-medium border-b-2'>Product Category</h2>
            <div className='grid lg:grid-cols-3 w-9/12 gap-4 mx-auto my-10'>
                {
                    categories?.map(category => <Category key={category._id} category={category} ></Category>)
                }
            </div>
            
        </div>
    );
};

export default Categories;