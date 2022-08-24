import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Teacher from '../../assets/images/teacher.svg';

const Header = () => {
    return (
        <header className='bg-gradient-to-r from-[#D4FEDC] to-[#EFF2DD] h-[89.6vh] mx-16 rounded-2xl flex items-center'>
            <div className='ml-14'>
                <h1 className='text-6xl font-semibold text-[#29312C] mb-5 w-4/6 leading-[4.5rem]'>Learn Great Things From Us</h1>
                <p className='text-xl leading-9'>Online Certified Courses With in-depth and Practical Lessons in Over 100 Subjects. Sign Up For Free.</p>
                <button className='px-4 py-3 rounded-lg bg-[#32D78B] text-white my-12'>Get Started Now</button>
                <div className='flex justify-between w-[400px]'>
                    <div className='flex items-center'>
                        <BsArrowRight color='#32d788' className='mr-5'/><p className='inline font-medium'>Globally Recognised</p>
                    </div>
                    <div className='flex items-center'>
                        <BsArrowRight color='#32d788' className='mr-5'/><p className='inline font-medium'> No Commitment</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-full' src={Teacher} alt="" />
            </div>
        </header>
    );
};

export default Header;