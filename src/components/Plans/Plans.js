import React from 'react';
import { HiCheck, HiOutlineX } from 'react-icons/hi'

const Plans = () => {
    return (
        <div className='bg-gradient-to-r from-[#E5F4F0] to-[#F5EAED] h-full lg:mx-16 lg:rounded-2xl py-10'>
            <div className='lg:w-[31%] w-[80%] mx-auto'>
                <p className='text-orange-500 text-center '>Pricing Plan</p>
                <h1 className="text-3xl font-bold text-center">Let The Online Course Take Straining</h1>
            </div>
            <div className='flex justify-center items-center mt-20'>
                <h3 className="text-xl font-bold mr-5">Monthly</h3>
                <input type="checkbox" class="toggle mr-5" checked />
                <h3 className="text-xl font-bold">Yearly</h3>
            </div>
            <div className='flex justify-center lg:flex-row flex-col mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl mr-5 lg:mb-0 mb-8">

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Standerd</h2>
                        <h1 className="text-3xl font-bold text-orange-600">$199<span className='text-xs text-gray-500'> / Yearly</span></h1>
                        <div className='text-start my-16'>
                           <div className='flex items-center mb-5'><HiOutlineX color='orange' size={22} className='mr-3'/> <p className=''>Unlimited Courses in a Month</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/><p className=''>Unlimited Notes in a Year</p></div>
                           <div className='flex items-center mb-5'><HiOutlineX color='orange' size={22} className='mr-3'/> <p className=''>100 Forum in a Month</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p className=''>Best Teacher Take Lessons</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p>24/7 Strong Support</p></div>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn-outline border-[#32D78B] hover:border-[#32D78B] hover:bg-[#32D78B]">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Premium</h2>
                        <h1 className="text-3xl font-bold text-orange-600">$299<span className='text-xs text-gray-500'> / Yearly</span></h1>
                        <div className='text-start my-16'>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p className=''>Unlimited Courses in a Month</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/><p className=''>Unlimited Notes in a Year</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p className=''>100 Forum in a Month</p></div>
                           <div className='flex items-center mb-5'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p className=''>Best Teacher Take Lessons</p></div>
                           <div className='flex items-center'><HiCheck size={22} color={'#32D78B'} className='mr-3'/> <p>24/7 Strong Support</p></div>
                        </div>
                        <div class="card-actions">
                            <button class="btn bg-[#32D78B] border-0 hover:bg-[#32D78B]">Enroll Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Plans;