import React from 'react';
import HeaderBanner from './HeaderBanner';
import Courses from '../Shared/Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                 <HeaderBanner></HeaderBanner>
            </div>
            <div className='mt-12'>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;