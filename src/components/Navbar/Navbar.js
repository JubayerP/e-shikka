import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Courses</a></li>
                        <li><a>Mentor</a></li>
                        <li><a>About</a></li>
                        <li><a>Pricing</a></li>
                        <a className="py-2 px-4 bg-[orange] rounded-lg cursor-pointer text-white font-medium">Get started</a>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex ml-20">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Courses</a></li>
                        <li><a>Mentor</a></li>
                        <li><a>About</a></li>
                        <li><a>Pricing</a></li>
                    </ul>
                </div>
            </div>
            <h1 className="text-3xl font-bold lg:w-[9rem] w-[14rem] text-[#32D78B]">E-Shikka</h1>
            <div className="navbar-end mr-14">
                <BiSearch size={20} className='cursor-pointer mr-5' />
                <a className="py-2 px-4 bg-[orange] rounded-lg cursor-pointer text-white font-medium hidden lg:block">Get Started</a>
            </div>
        </nav>
    );
};

export default Navbar;