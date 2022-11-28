import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUser = () => {
 const   allUser = useLoaderData();
 
    return (
        <div>
            <h2>users: {allUser.length}</h2>
        </div>
    );
};

export default AllUser;