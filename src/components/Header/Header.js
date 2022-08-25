import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Teacher from '../../assets/images/teacher.svg';

const Header = () => {
    return (
        <header className='bg-gradient-to-r from-[#D4FEDC] to-[#EFF2DD] lg:h-[89.6vh] h-full lg:mx-16 rounded-2xl flex lg:flex-row flex-col items-center lg:py-0 py-5'>
            <div className='lg:ml-14 mx-2'>
                <h1 className='lg:text-6xl text-4xl font-semibold text-[#29312C] mb-5 lg:w-4/6 leading-[3.5rem] lg:leading-[4.5rem]'>Learn Great Things From Us</h1>
                <p className='text-xl leading-9 lg:w-full w-[22rem]'>Online Certified Courses With in-depth and Practical Lessons in Over 100 Subjects. Sign Up For Free.</p>
                <button className='px-4 py-3 rounded-lg bg-[#32D78B] text-white lg:my-12 my-8'>Get Started Now</button>
                <div className='flex justify-between lg:flex-row flex-col w-[400px]'>
                    <div className='flex items-center'>
                        <BsArrowRight color='#32d788' className='mr-5'/><p className='inline font-medium'>Globally Recognised</p>
                    </div>
                    <div className='flex items-center'>
                        <BsArrowRight color='#32d788' className='mr-5'/><p className='inline font-medium'> No Commitment</p>
                    </div>
                </div>
            </div>
            <div className='lg:ml-0 ml-5 mt-10'>
                <img className='lg:w-full w-3/4' src={Teacher} alt="" />
            </div>
        </header>
    );
};

export default Header;