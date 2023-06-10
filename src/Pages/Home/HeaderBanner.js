import React from 'react';
import Banner from '../../assests/banner.png';

const HeaderBanner = () => {
    return (
        <div className='lg:flex justify-around items-center lg:px-20 px-10 lg:py-0 py-10'> 
            <div className='headerText text-left'>
                <h2 className='text-3xl font-medium'>Best Learning Opportunities</h2>
                <p className='mt-4'>Edusite is a learning site that can enlarge your knowledge and skills. This is an incredible resource and is extremely versatile; it is a beneficial platform for people of all ages and abilities.</p>
            </div>
            <img src={Banner} alt="banner" className='lg:w-2/4 w-full'/>
        </div>
        
    );
};

export default HeaderBanner;