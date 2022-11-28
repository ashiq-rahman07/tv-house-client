import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Cards from './Cards';

const Home = () => {
    return (
        <div className=''>
           
            <Banner></Banner>
            <Categories></Categories>
            <Cards></Cards>
        </div>
    );
};

export default Home;