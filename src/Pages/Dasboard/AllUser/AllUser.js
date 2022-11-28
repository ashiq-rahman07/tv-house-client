import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${users.name} and ${users.role} deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account tYPE</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {
                                    user?.role === 'Seller' &&
                                    <td>Seller</td>
                                }
                                {
                                    user?.role === 'Buyer' &&
                                    <td>Buyer</td>
                                }
                                {
                                    user?.role === 'Admin' &&
                                    <td>Admin</td>
                                }

                                {/* <td>
                                    {user?.role !== 'admin' && <button  className='btn btn-xs btn-primary'>Make Admin</button>}
                                    </td> */}
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs btn-danger'>Delete</button>
                                    </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default AllUser;