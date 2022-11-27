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
        <div className='container mx-auto'>
            <h2>Categories:{categories?.length} </h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    categories?.map(category => <Category key={category._id} category={category} ></Category>)
                }
            </div>
            
        </div>
    );
};

export default Categories;