import React from 'react';
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mx-16 h-16'>
            <div>
                <ul className='flex items-center font-medium'>
                    <li className='mr-8 hover:text-[#32D78B] duration-100'><a href="#">Course</a></li>
                    <li className='mr-8 hover:text-[#32D78B] duration-100'><a href="#">Mentor</a></li>
                    <li className='mr-8 hover:text-[#32D78B] duration-100'><a href="#">About</a></li>
                    <li className='mr-8 hover:text-[#32D78B] duration-100'><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div className='mr-36'>
                <h1 className="text-3xl font-bold text-[#32D78B]">E-Shikka</h1>
            </div>
            <div className='flex items-center justify-around w-36'>
                <BiSearch size={20} className='cursor-pointer'/>
                <button className='py-2 px-4 rounded-lg bg-[#E96B3B] text-white font-medium'>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;