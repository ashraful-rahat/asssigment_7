/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../banner/Banner';
import Books from '../books/Books';

const Home = () => {
    return (
        <div className='mt-[20px]'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;