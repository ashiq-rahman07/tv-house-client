import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Review from '../Review';
import Cards from './Cards';

const Home = () => {
    return (
        <div className=''>
           
            <Banner></Banner>
            <Categories></Categories>
            <Review></Review>
         
        </div>
    );
};

export default Home;