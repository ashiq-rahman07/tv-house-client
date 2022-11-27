import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';

const Home = () => {
    return (
        <div className='max-w-max mx-auto'>
           
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;