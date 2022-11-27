import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { loading, user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        product_name: data.product_name,
                        email: data.email,
                        resale_price: data.resale_price,
                        category_name: data.category_name,
                        years_use: data.years_use,
                        condition_type: data.condition_type,
                        product_img: imgData.data.url,
                        description: data.description,
                        mobile: data.mobile
                    }
                    console.log(product)


                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            toast.success(`${data.product_name} is added successfully`);
                            navigate('/dashboard/myproduct');
                        })
                }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-4/6 mx-auto bg-slate-500 p-7'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid grid-cols-2 gap-4'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("product_name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("resale_price", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition Type</span></label>
                        <select {...register('condition_type')} className="select input-bordered w-full max-w-xs">
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <select name="" id=""{...register('category_name')} className="select input-bordered w-full max-w-xs">
                            <option value="Shinger Tv">Shinger Tv</option>
                            <option value="Walton Tv">Walton Tv</option>
                            <option value="Samsung Tv">Samsung Tv</option>
                        </select>
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Years of Use</span></label>
                        <input type="text" {...register("years_use", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile No</span></label>
                        <input type="text" {...register("mobile", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea cols="30" rows="10"  {...register("description", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" >Wrigt dexcription</textarea>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" defaultValue={user?.email} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};



export default AddProduct;