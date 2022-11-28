import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
   
    return (
        <div>
            <p>my booking {bookings.length}</p>
            <div>
                {
                    bookings?.map(order=><OrderCard key={order._id} order={order}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;