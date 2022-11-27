import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
       
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    email,
                    name,
                    role
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                setError('');
                form.reset();
            })
            .catch(e => {
                console.error(e);
                setError(e.message);

            });
    }
    return (
        <div className=" w-2/5 mt-20 mx-auto bg-gray-900  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-gray-200 text-center">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-lg">
                    <label htmlFor="name" className="block text-gray-400">Name</label>
                    <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md text-gray-900" required />
                </div>
               
                <div className="space-y-1 text-lg">
                    <p className='text-gray-400' >Please select User Type :</p>
                    <div className='flex items-center justify-evenly bg-slate-800'>
                        <label className='text-gray-400' htmlFor="seller">Seller</label>
                        <input type="radio" id="seller" name="role" value="Seller" className=" px-4 py-3 rounded-md "></input>
                    </div>
                    <div className='flex items-center justify-evenly bg-slate-800'>
                        <label className='text-gray-400' htmlFor="buyer ">Buyer</label>
                        <input type="radio" id="buyer" name="role" value="Buyer" />
                   </div>

                   
                </div>     
                <div className="space-y-1 text-lg">
                    <label htmlFor="email" className="block text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md " required />

                    
                </div>
                <div className="space-y-1 text-lg">
                    <label htmlFor="password" className="block text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  " required />

                </div>
                <button className="block w-full p-3 text-center bg-indigo-600 text-yellow-50 rounded-sm ">Sign Up</button>
            </form>

            <p className="text-lg text-center sm:px-6 text-gray-400">All ready have an account?
                <Link to='/login' className='hover:text-orange-700 font-medium'>Sign in</Link>
            </p>
        </div>
    );
};

export default SignUp;